"use strict";

import db from "../db.js";

/** Category Model */
class Category {
  /** Get all categories */
  static async getAll() {
    const result = await db.query(`
    SELECT name
    FROM categories
    ORDER BY id
    `);
    return result.rows;
  }

  /** Get array of category names */
  static async getNames() {
    const categories = await Category.getAll();
    const names = categories.map((category) => category.name);
    return names;
  }
}

export default Category;
