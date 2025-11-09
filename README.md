# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authen# Express.js RESTful API - Products

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

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 
