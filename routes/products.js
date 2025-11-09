const express = require("express");
const router = express.Router();
let products = require("../data/products");
const { v4: uuidv4 } = require("uuid");

const auth = require("../middleware/auth");
const validateProduct = require("../middleware/validateProduct");

// GET all products (with filter, pagination, search)
router.get("/", (req, res) => {
  let result = [...products];

  const { category, search, page = 1, limit = 10 } = req.query;

  if (category) {
    result = result.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (search) {
    result = result.filter(
      p => p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const start = (page - 1) * limit;
  const paginated = result.slice(start, start + Number(limit));

  res.json({
    total: result.length,
    page: Number(page),
    limit: Number(limit),
    data: paginated
  });
});

// GET product by ID
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// CREATE product
router.post("/", auth, validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product
router.put("/:id", auth, validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };

  res.json(products[index]);
});

// DELETE product
router.delete("/:id", auth, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);

  res.status(204).send();
});

module.exports = router;
