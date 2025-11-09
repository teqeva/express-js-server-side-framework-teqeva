const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const productRoutes = require("./routes/products");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Parse JSON
app.use(bodyParser.json());

// Logger middleware
app.use(require("./middleware/logger"));

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Product routes
app.use("/api/products", productRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
