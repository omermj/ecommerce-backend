"use strict";

import db from "../db.js";

/** Product Model */
class Product {
  /** Get all products */
  static async getAll(filters = {}) {
    // get filters
    const { search, category, company, price, featured, shipping, order } =
      filters;

    const whereExpressions = [];
    const queryValues = [];

    // Base query
    let query = `
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
    `;

    // If there are any filters, add WHERE clause
    if (search) {
      queryValues.push(`%${search}%`);
      whereExpressions.push(`p.title ILIKE $${queryValues.length}`);
    }
    if (category) {
      queryValues.push(`%${category}%`);
      whereExpressions.push(`cat.name ILIKE $${queryValues.length}`);
    }
    if (company) {
      queryValues.push(`%${company}%`);
      whereExpressions.push(`com.name ILIKE $${queryValues.length}`);
    }
    if (price) {
      queryValues.push(`${price}`);
      whereExpressions.push(`p.price <= $${queryValues.length}`);
    }
    if (featured) {
      queryValues.push(`${featured}`);
      whereExpressions.push(`p.featured = $${queryValues.length}`);
    }
    if (shipping) {
      queryValues.push(`${shipping}`);
      whereExpressions.push(`p.shipping = $${queryValues.length}`);
    }
    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Add ORDER BY clause
    if (order === "asc" || order === "desc") {
      query += ` ORDER BY p.price ${order.toUpperCase()}`;
    }

    console.log(query);

    // Finalize query and return results
    const result = await db.query(query, queryValues);
    return result.rows;

    // const result = await db.query(`
    // SELECT p.id,
    //   p.title,
    //   com.name AS "company",
    //   p.description,
    //   p.featured,
    //   cat.name AS "category",
    //   p.image,
    //   p.price,
    //   p.shipping,
    //   p.colors
    // FROM products AS "p"
    // JOIN companies AS "com" ON com.id = p.company_id
    // JOIN categories AS "cat" ON cat.id = p.category_id
    // ORDER BY p.id
    // `);
    // return result.rows;
  }
}

export default Product;
