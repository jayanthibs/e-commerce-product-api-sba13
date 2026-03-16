<h1 align="center"> Product API (Express + MongoDB)</h1>

## Overview
This project is a RESTful API built with Node.js, Express, and MongoDB using Mongoose. It allows users to create, read, update, and delete products, with additional support for filtering, sorting, and pagination when retrieving products.

---
## Technologies

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Dotenv
---

## Project Setup

1. Initialize the project
```bash
npm init -y
```
2. Install dependencies
```bash
npm install express mongoose dotenv
```
3. Create a `.env` file
```
MONGO_URI=mongodb_connection_string
PORT=3000
```
4. Add `.gitignore`
```
node_modules/
.env
```
---
## Project Structure
```
project-folder
│
├── controllers
│   └── productControllers.js
├── db
│   └── connection.js
├── models
│   └── Product.js
├── routes
│   └── productRoutes.js
├── server.js
├── .env
└── README.md
```
---
- db/ – Contains database connection logic.
- models/ – Contains Mongoose schemas and models.
- controllers/ – Contains business logic for handling API requests.
- routes/ – Defines API endpoints and connects them to controllers.
- server.js – Main entry point of the application.

## Product Schema

The **Product model** includes:

* `name` – String (required)
* `description` – String (required)
* `price` – Number (required, must be > 0)
* `category` – String (required)
* `inStock` – Boolean (default: true)
* `tags` – Array of strings
* `createdAt` – Date (default: current date)

---

## API Endpoints

Base URL

```
/api/products
```

**Create Product**
POST `/api/products`

**Get All Products**
GET `/api/products`
Supports query parameters:

* `category`
* `minPrice`
* `maxPrice`
* `sortBy` (price_asc / price_desc)
* `page`
* `limit`

**Get Single Product**
GET `/api/products/:id`

**Update Product**
PUT `/api/products/:id`

**Delete Product**
DELETE `/api/products/:id`

---

## Run the Server

```
npm run dev
```
The API will run on:
```
http://localhost:3000
```
