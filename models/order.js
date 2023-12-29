"use strict";

import db from "../db.js";

/** Order Model */
class Order {
  /** Get all orders */
  static async getAll(username) {
    // Get orders from orders table
    const ordersResult = await db.query(
      `
    SELECT id, username, name, address, created_at AS "createdAt"
    FROM orders
    WHERE username = $1
    ORDER BY created_at DESC
    `,
      [username]
    );

    // Get cart items from orders_products table and add other data
    const ordersWithProducts = await Promise.all(
      ordersResult.rows.map(async (order) => {
        const orderProductsResult = await db.query(
          `
        SELECT op.product_id AS "productId",
          op.quantity,
          op.product_color AS "productColor",
          p.price
        FROM orders_products AS op
        JOIN products AS p ON p.id = op.product_id
        WHERE order_id = $1
        `,
          [order.id]
        );
        order.cartItems = orderProductsResult.rows;

        // Add other data
        order.orderTotal = 0;
        order.numItemsInCart = 0;
        order.cartItems.forEach((item) => {
          order.orderTotal += item.quantity * item.price;
          order.numItemsInCart += item.quantity;
        });
        return order;
      })
    );

    return ordersWithProducts;
  }

  /** Get single order by id */

  /** Create new order */
  static async create({ data }) {
    const { name, username, address, cartItems } = data;
    console.log("cartItems", cartItems);
    // Add order to orders table
    const orderResult = await db.query(
      `
      INSERT INTO orders (username, name, address)
      VALUES ($1, $2, $3)
      RETURNING id, username, name, address
      `,
      [username, name, address]
    );
    console.log("orderId", orderResult.rows[0].id);
    // Add cart items to order_products table
    const orderProducts = cartItems.map(async (item) => {
      return await db.query(
        `
        INSERT INTO orders_products (order_id, product_id, quantity, 
          product_color)
        VALUES ($1, $2, $3, $4)
        RETURNING order_id AS "orderId",
          product_id AS "productId",
          quantity,
          product_color AS "productColor"
        `,
        [
          orderResult.rows[0].id,
          item.productId,
          item.quantity,
          item.productColor,
        ]
      );
    });

    // Wait for all queries to finish
    // await Promise.all(orderProducts);

    // Return order data
    return { ...orderResult.rows[0], cartItems };
  }
}

export default Order;
