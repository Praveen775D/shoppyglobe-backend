const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addToCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

// protected routes
router.post("/cart", auth, addToCart);
router.put("/cart/:id", auth, updateCart);
router.delete("/cart/:id", auth, deleteCart);

module.exports = router;