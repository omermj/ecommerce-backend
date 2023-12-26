"use strict";

import db from "../db.js";

/** Product Model */
class Product {
  /** Get all products */
  static async getAll() {
    const result = await db.query(`
    SELECT p.id,
      p.title,
      com.name AS "company",
      p.description,
      p.featured,
      cat.name AS "category",
      p.image,
      p.price,
      p.shipping,
      p.colors
    FROM products AS "p"
    JOIN companies AS "com" ON com.id = p.company_id
    JOIN categories AS "cat" ON cat.id = p.category_id
    ORDER BY p.id
    `);
    return result.rows;
  }
}

export default Product;
