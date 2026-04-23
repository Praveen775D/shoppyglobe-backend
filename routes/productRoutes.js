const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

// GET all products
router.get("/products", getProducts);

// GET product by ID
router.get("/products/:id", getProductById);

module.exports = router;