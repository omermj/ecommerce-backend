"use strict";

import express from "express";
import User from "../models/user.js";
import { ensureAdmin } from "../middleware/auth.js";

const router = express.Router();

/** Get all users
 * Admin only
 */
router.get("/", ensureAdmin, async (req, res, next) => {
  try {
    const users = await User.getAll();
    return res.json({ data: users });
  } catch (e) {
    return next(e);
  }
});

export default router;
