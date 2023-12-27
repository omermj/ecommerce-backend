"use strict";

import db from "../db.js";

/** Order Model */
class Order {
  /** Get all orders */
  static async getAll() {
    const result = await db.query(`
    SELECT id, username
    FROM orders
    ORDER BY id
    `);
    return result.rows;
  }

  /** Get single order by id */

  /** Create new order */
  static async create({ data }) {
    const {
      name,
      username,
      address,
      cartItems,
      chargeTotal,
      orderTotal,
      numItemsInCart,
    } = data;

    // Add order to orders table
    const orderResult = await db.query(
      `
      INSERT INTO orders (username, address)
      VALUES ($1, $2)
      RETURNING id, username, address
      `,
      [username, address]
    );

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
