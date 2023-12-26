"use strict";

/** Routes for auth */

import express from "express";

const router = express.Router();

/** Login / Token */
router.post("/token", async (req, res, next) => {
  try {
    return res.json("login route");
  } catch (e) {
    return next(e);
  }
});

/** Register User */
router.post("/register", async (req, res, next) => {
  try {
    return res.json("register route");
  } catch (e) {
    return next(e);
  }
});

export default router;
