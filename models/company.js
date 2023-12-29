"use strict";

import db from "../db.js";

/** Company Model */
class Company {
  /** Get all companies */
  static async getAll() {
    const result = await db.query(`
    SELECT id, name
    FROM companies
    ORDER BY id
    `);
    return result.rows;
  }

  /** Get array of company names */
  static async getNames() {
    const companies = await Company.getAll();
    const names = companies.map((company) => company.name);
    return names;
  }
}

export default Company;
