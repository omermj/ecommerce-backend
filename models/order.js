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
}

export default Order;
