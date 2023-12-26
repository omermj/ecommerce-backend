"use strict";

import pg from "pg";
import { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT } from "./config.js";

const db = new pg.Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : null,
});

db.connect();

export default db;
