const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ADD to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ message: "Missing fields" });
    }

    // check product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const item = await Cart.create({
      userId: req.user.id,
      productId,
      quantity,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE cart item
exports.updateCart = async (req, res) => {
  try {
    const { quantity } = req.body;

    const item = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE cart item
exports.deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};