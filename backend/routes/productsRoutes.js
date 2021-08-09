const express = require("express");
const { getProducts, getProduct } = require("../controller/productController");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCT
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);

module.exports = router;
