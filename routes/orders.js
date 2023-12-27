"use strict";

import express from "express";
import jsonschema from "jsonschema";
import Order from "../models/order.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

/** Get all orders */
router.get("/", pagination(), async (req, res, next) => {
  try {
    const { startIdx, endIdx, generateMeta } = res.locals.pagination;
    const orders = await Order.getAll();
    const paginatedOrders = orders.slice(startIdx, endIdx);
    return res.json({ data: paginatedOrders, meta: generateMeta(orders) });
  } catch (e) {
    return next(e);
  }
});

/** Get single order */
router.get("/:id", async (req, res, next) => {
  try {
    return res.json(`get order id: ${req.params.id}`);
  } catch (e) {
    return next(e);
  }
});

/** Create order */
router.post("/", async (req, res, next) => {
  try {
    // validation

    // create order
    const order = await Order.create(req.body);
    return res.status(201).json(order);
  } catch (e) {
    return next(e);
  }
});

export default router;
