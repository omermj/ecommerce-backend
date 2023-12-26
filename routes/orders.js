import express from "express";
import jsonschema from "jsonschema";
import Order from "../models/order.js";

const router = express.Router();

/** Get all orders */
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.getAll();
    return res.json({ data: orders });
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
    return res.json("created new order");
  } catch (e) {
    return next(e);
  }
});

export default router;
