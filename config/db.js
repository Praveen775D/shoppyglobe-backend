// config/db.js
const mongoose = require("mongoose");

// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Connect using MONGO_URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,        // Use new URL parser (recommended)
      useUnifiedTopology: true,     // Use new server discovery engine
    });

    // Success message
    console.log(" MongoDB Connected");
  } catch (error) {
    // Error handling if connection fails
    console.error(" DB Error:", error.message);

    // Exit process with failure
    process.exit(1);
  }
};

// Export the connection function
module.exports = connectDB;