const express = require("express");
const asyncHandler = require("express-async-handler");
const ProductModel = require("../models/ProductModel");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCT
router.get(
  "/products",
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find({});
    res.json(products);
  })
);

//GET ROUTE FOR SINGLE PRODUCT
router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

module.exports = router;
