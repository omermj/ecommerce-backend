"use strict";

import db from "../db.js";

/** User Model */
class User {
  /** Get all users */
  static async getAll() {
    const result = await db.query(`
    SELECT username, email
    FROM users
    ORDER BY username
    `);
    return result.rows;
  }
}

export default User;
