"use strict";

import dotenv from "dotenv";

/** Config */

dotenv.config();
const PORT = +process.env.PORT || 3001;
const SECRET_KEY = process.env.SECRET_KEY || "secret_dev";
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

// Database settings
const DB_NAME =
  process.env.NODE_ENV === "test"
    ? "ecommerce_db_test"
    : process.env.DB_NAME || "ecommerce_db";

const DB_USER = process.env.DB_NAME || "postgres";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PASSWORD = process.env.DB_PASSWORD || "postgres";
const DB_PORT = process.env.DB_PORT || "5432";

export {
  PORT,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  DB_NAME,
  DB_USER,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
};
