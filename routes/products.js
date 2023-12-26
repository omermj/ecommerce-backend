import express from "express";
import jsonschema from "jsonschema";

const router = express.Router();

/** Get all products
 * Products can be filtered based on criteria
 * Request can be paginated
 */
router.get("/", async (req, res, next) => {
  try {
    return res.json("get all products");
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
