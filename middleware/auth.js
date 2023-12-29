"use strict";

/** Middleware to handle auth in routes */

import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import User from "../models/user.js";
import { UnauthorizedError } from "../helpers/expressError.js";

/** Middleware: Authenticate user. */
const authenticateJWT = (req, res, next) => {
  try {
    const authHeader = req.headers && req.headers.authorization;
    if (authHeader) {
      const tokenFromHeader = authHeader.replace(/^[Bb]earer /, "").trim();
      const payload = jwt.verify(tokenFromHeader, SECRET_KEY);
      req.user = payload;
    }
    return next();
  } catch (err) {
    return next();
  }
};

/** Middleware: Requires user is authenticated. */
const ensureLoggedIn = (req, res, next) => {
  try {
    if (!req.user) throw new UnauthorizedError();
    return next();
  } catch (err) {
    return next(err);
  }
};

/** Middleware: Requires user is admin. */
const ensureAdmin = (req, res, next) => {
  try {
    if (!req.user || !req.user.admin) throw new UnauthorizedError();
    return next();
  } catch (err) {
    return next(err);
  }
};

export { authenticateJWT, ensureLoggedIn, ensureAdmin };
