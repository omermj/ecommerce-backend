import express from "express";
import jsonschema from "jsonschema";
import Product from "../models/product.js";
import pagination from "../middleware/pagination.js";

const router = express.Router();

/** Get all products
 * Products can be filtered based on criteria
 * Request can be paginated
 */
router.get("/", pagination(), async (req, res, next) => {
  try {
    const { startIdx, endIdx, generateMeta } = res.locals.pagination;
    const products = await Product.getAll(req.query);
    const paginatedProducts = products.slice(startIdx, endIdx);
    return res.json({
      data: paginatedProducts,
      meta: generateMeta(products),
    });
  } catch (e) {
    return next(e);
  }
});

/** Get single product */
router.get("/:id", async (req, res, next) => {
  try {
    return res.json(`get product id: ${req.params.id}`);
  } catch (e) {
    return next(e);
  }
});

export default router;
