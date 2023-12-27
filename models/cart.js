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

  /** Delete cart by id */

  /** Add product to cart */
  static async addProduct({ cartId, productId, quantity, productColor }) {
    const result = await db.query(
      `
      INSERT INTO cart_products (cart_id, product_id, quantity, product_color)
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
