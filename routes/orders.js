"use strict";

import express from "express";
import jsonschema from "jsonschema";
import newOrderSchema from "../schemas/newOrder.json" assert { type: "json" };
import Order from "../models/order.js";
import pagination from "../middleware/pagination.js";
import { ensureLoggedIn } from "../middleware/auth.js";

const router = express.Router();

/** Get all orders
 * Requires user to be logged in
 */
router.get("/", ensureLoggedIn, pagination(), async (req, res, next) => {
  try {
    const { startIdx, endIdx, generateMeta } = res.locals.pagination;
    const orders = await Order.getAll(req.user.username);
    const paginatedOrders = orders.slice(startIdx, endIdx);
    return res.json({ data: paginatedOrders, meta: generateMeta(orders) });
  } catch (e) {
    return next(e);
  }
});

/** Get single order */
router.get("/:id", ensureLoggedIn, async (req, res, next) => {
  try {
    return res.json(`get order id: ${req.params.id}`);
  } catch (e) {
    return next(e);
  }
});

/** Create order */
router.post("/", ensureLoggedIn, async (req, res, next) => {
  try {
    // validation
    const validator = jsonschema.validate(req.body, newOrderSchema);
    if (validator.valid === false) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    // create order
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (e) {
    return next(e);
  }
});

export default router;
