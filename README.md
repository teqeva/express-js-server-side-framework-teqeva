# Express.js RESTful API - Products

## Overview
This project is a RESTful API built using Express.js. It includes CRUD operations, middleware, error handling, filtering, pagination, and search.

---

## Setup

1. Install dependencies:

npm install
2. Create .env file based on .env.example:

PORT=3000
API_KEY=your_api_key_here
3. Run server

npm start
# API Endpoints
GET /api/products

Returns all products
Supports:

category=

search=

page=

limit=

GET /api/products/:id

Returns a single product.

POST /api/products

Requires:
x-api-key: your_api_key
# Body:

{
  "name": "Phone",
  "description": "Smartphone",
  "price": 700,
  "category": "Electronics",
  "inStock": true
}
PUT /api/products/:id

Requires API key.

DELETE /api/products/:id

Requires API key.

# Middleware Included

Logger middleware (method, URL, timestamp)

JSON parser (body-parser)

API key authentication

Validation middleware

Global error handler