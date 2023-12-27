"use strict";

/** Routes for Cart */

import express from "express";
import jsonschema from "jsonschema";
import Cart from "../models/cart.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

/** Get a single cart */
router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.get(req.params.id);
    return res.json({ data: cart });
  } catch (e) {
    return next(e);
  }
});

/** Create a new cart */
router.post("/", async (req, res, next) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(201).json({ data: cart });
  } catch (e) {
    return next(e);
  }
});

