import express from "express";
import jsonschema from "jsonschema";

const router = express.Router();

/** Get all users
 * ensureAdmin
 */
router.get("/", async (req, res, next) => {
  try {
    return res.json("successful");
  } catch (e) {
    return next(e);
  }
});

export default router;
