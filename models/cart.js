"use strict";

import db from "../db.js";

/** Cart Model */
class Cart {
  /** Get all carts */
  static async getAll() {
    const result = await db.query(`
    SELECT id, username
    FROM carts
    ORDER BY id
    `);
    return result.rows;
  }

  /** Get single cart by id */
  static async get(id) {
    const result = await db.query(
      `
      SELECT id, username
      FROM carts
      WHERE id = $1
      `,
      [id]
    );
    return result.rows[0];
  }

  /** Create new cart */
  static async create({ username }) {
    const result = await db.query(
      `
      INSERT INTO carts (username)
      VALUES ($1)
      RETURNING id, username
      `,
      [username]
    );
    return result.rows[0];
  }

  /** Update cart with data */
  static async update(id, data) {}

  /** Delete cart by id */

  /** Add product to cart */
  static async addProduct({ cartId, productId, quantity, productColor }) {
    // if product already exists in cart, update quantity
    const existingProduct = await db.query(
      `SELECT cart_id AS "cartId",
        product_id AS "productId",
        quantity,
        product_color AS "productColor" 
      FROM carts_products 
      WHERE cart_id = $1 AND product_id = $2 AND product_color = $3`,
      [cartId, productId, productColor]
    );
    if (existingProduct.rows[0]) {
      const result = await db.query(
        `
        UPDATE carts_products
        SET quantity = $1
        WHERE cart_id = $2 AND product_id = $3 AND product_color = $4
        RETURNING cart_id AS "cartId",
          product_id AS "productId",
          quantity,
          product_color AS "productColor"
        `,
        [
          +existingProduct.rows[0].quantity + quantity,
          cartId,
          productId,
          productColor,
        ]
      );
      return result.rows[0];
    }

    // else, insert new product into cart
    const result = await db.query(
      `
      INSERT INTO carts_products (cart_id, product_id, quantity, product_color)
      VALUES ($1, $2, $3, $4)
      RETURNING cart_id AS "cartId",
        product_id AS "productId",
        quantity,
        product_color AS "productColor"
      `,
      [cartId, productId, quantity, productColor]
    );
    return result.rows[0];
  }

  /** Remove product from cart */
  static async removeProduct({ cartId, productId }) {
    const result = await db.query(
      `
      DELETE FROM cart_products
      WHERE cart_id = $1 AND product_id = $2
      RETURNING cart_id AS "cartId", product_id AS "productId"
      `,
      [cartId, productId]
    );
    return result.rows[0];
  }

  /** Get all products in cart */

  /** Get single product in cart */

  /** Update product in cart */
}

export default Cart;
