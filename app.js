"use strict";

/** Backend of Wood-Store, an E-Commerce Web App */

import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

export default app;
