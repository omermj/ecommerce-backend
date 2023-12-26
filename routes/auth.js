"use strict";

/** Routes for auth */

import express from "express";
import jsonschema from "jsonschema";
import userLoginSchema from "../schemas/userLogin.json" assert { type: "json" };
import userAddSchema from "../schemas/userAdd.json" assert { type: "json" };
import createToken from "../helpers/tokens.js";
import User from "../models/user.js";
import { BadRequestError } from "../helpers/expressError.js";

const router = express.Router();

/** Login / Token */
router.post("/token", async (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, userLoginSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    const { username, password } = req.body;
    const user = await User.authenticate(username, password);
    const token = createToken(user);
    return res.json({ token, user });
  } catch (e) {
    return next(e);
  }
});

/** Register User */
router.post("/register", async (req, res, next) => {
  try {
    const validator = jsonschema.validate(req.body, userAddSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    const newUser = await User.register({ ...req.body, isAdmin: false });
    const token = createToken(newUser);
    return res.status(201).json({ token, user: newUser });
  } catch (e) {
    return next(e);
  }
});

export default router;
