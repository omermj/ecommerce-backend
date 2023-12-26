"use strict";

/** Backend of Wood-Store, an E-Commerce Web App */

import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

export default app;
