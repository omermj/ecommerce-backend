"use strict";

import express from "express";
import User from "../models/user.js";

const router = express.Router();

/** Get all users
 * ensureAdmin
 */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.getAll();
    return res.json({ data: users });
  } catch (e) {
    return next(e);
  }
});

export default router;
