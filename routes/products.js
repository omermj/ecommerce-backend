import express from "express";
import jsonschema from "jsonschema";
import Product from "../models/product.js";
import Company from "../models/company.js";
import Category from "../models/category.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

/** Get all products
 * Public route
 */
router.get("/", pagination(), async (req, res, next) => {
  try {
    // Get products
    const { startIdx, endIdx, generateMeta } = res.locals.pagination;
    const products = await Product.getAll(req.query);

    const paginatedProducts = products.slice(startIdx, endIdx);

    // Get companies and categories
    const companies = ["All", ...(await Company.getNames())];
    const categories = ["All", ...(await Category.getNames())];

    // Return response
    return res.json({
      data: paginatedProducts,
      meta: { ...generateMeta(products), companies, categories },
    });
  } catch (e) {
    return next(e);
  }
});

/** Get single product
 * Public route
 */
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.get(req.params.id);
    return res.json({ data: product, meta: {} });
  } catch (e) {
    return next(e);
  }
});

export default router;
