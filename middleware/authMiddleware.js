// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

// Middleware to protect routes using JWT authentication
const authMiddleware = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization;

  // If no token provided, return unauthorized error
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token using secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user data to request object
    req.user = decoded;

    // Move to next middleware/controller
    next();
  } catch (error) {
    // If token is invalid or expired
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Export middleware
module.exports = authMiddleware;