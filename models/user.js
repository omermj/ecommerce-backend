"use strict";

import db from "../db.js";
import { UnauthorizedError, BadRequestError } from "../helpers/expressError.js";
import bcrypt from "bcrypt";
import { BCRYPT_WORK_FACTOR } from "../config.js";

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

  /** Register user with data. Returns new user data. */
  static async register({ username, password, email }) {
    const duplicateCheck = await db.query(
      `SELECT username
      FROM users
      WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
        (username, password, email)
      VALUES ($1, $2, $3)
      RETURNING username, email`,
      [username, hashedPassword, email]
    );

    return result.rows[0];
  }

  /** Authenticates user using username and password */
  static async authenticate(username, password) {
    const result = await db.query(
      `SELECT username, email, password
      FROM users
      WHERE username = $1`,
      [username]
    );
    const user = result.rows[0];

    // If user found, compare hashed password to a new hash from password
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        delete user.password;
        return user;
      }
    }
    throw new UnauthorizedError("Invalid credentials");
  }
}

export default User;
