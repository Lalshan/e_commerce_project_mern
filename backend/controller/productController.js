const ProductModel = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  // throw new Error("Something error");
  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await ProductModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = { getProducts, getProduct };
