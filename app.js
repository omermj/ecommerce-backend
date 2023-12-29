"use strict";

/** Backend of Wood-Store, an E-Commerce Web App */

import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import { NotFoundError } from "./helpers/expressError.js";
import { authenticateJWT } from "./middleware/auth.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(authenticateJWT);

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

/** Handle 404 errors */
app.use((req, res, next) => {
  return next(NotFoundError());
});

/** Generic Error Handler */
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message;
  return res.status(status).json({
    error: {
      message,
      status,
    },
  });
});

export default app;
