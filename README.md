🛒 Product Search & Ranking Service

A Node.js microservice that ingests product data, enriches it with metadata, and returns ranked product search results based on user intent such as price sensitivity, availability, popularity, and relevance.
The service is designed to be fast, modular, and extensible, following real-world backend design principles.

📌 Problem Statement

Build a product search service that:

Stores products in a catalog

Supports metadata enrichment

Handles free-text user search queries (including Hinglish & typos)

Returns ranked products based on multiple business signals

Responds within < 1000ms latency

🧠 Key Features

🚀 RESTful APIs using Node.js & Express

🗂️ In-memory product catalog (fast access, low latency)

🔍 Intelligent search with intent parsing

📊 Ranking based on:

Price (cheap preference – “Sasta”)

Stock availability

Ratings

Popularity (units sold)

✍️ Hinglish query support (e.g. Sasta Iphone)

🧩 Typo handling (e.g. Ifone → Iphone)

⚡ Sub-100ms response time for up to 1000+ products

🧪 Modular, clean, and interview-ready code structure

🛠️ Tech Stack

Backend: Node.js, Express.js

Data Store: In-memory (JavaScript objects)

HTTP Client: Axios (for bootstrapping data)

Tools: Postman / Thunder Client

Language: JavaScript (CommonJS)

📁 Project Structure
product-search-engine/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   └── product.routes.js
│   │
│   ├── controllers/
│   │   ├── product.controller.js
│   │   └── search.controller.js
│   │
│   ├── services/
│   │   ├── catalog.service.js
│   │   └── ranking.service.js
│   │
│   ├── data/
│   │   └── catalog.js
│   │
│   ├── utils/
│   │   └── queryParser.js
│   │
│   └── scripts/
│       └── bootstrap.js
│
├── package.json
└── README.md

🚀 How to Run the Service
1️⃣ Install Dependencies
npm install

2️⃣ Start the Server
node src/server.js


You should see:

🚀 Product Search Service running on port 5000

3️⃣ (Optional but Recommended) Bootstrap Product Data

To simulate a large catalog (1000+ products):

node src/scripts/bootstrap.js


⚠️ Important:

Keep the server running while executing the bootstrap script

Data is stored in-memory, so restarting the server clears all data

📌 API Endpoints
🔹 1. Store Product in Catalog

POST /api/v1/product

{
  "title": "iPhone 17",
  "description": "iphone 17 256gb red colour",
  "rating": 4.5,
  "stock": 100,
  "price": 60000,
  "mrp": 79999,
  "currency": "Rupee",
  "unitsSold": 1200
}


Response

{
  "productId": 101
}

🔹 2. Update Product Metadata

PUT /api/v1/product/meta-data

{
  "productId": 101,
  "Metadata": {
    "brand": "Apple",
    "storage": "256GB",
    "color": "Red"
  }
}

🔹 3. Search & Rank Products

GET /api/v1/search/product?query=Sasta Iphone

Sample Response

{
  "data": [
    {
      "productId": 80,
      "title": "Iphone 13",
      "description": "This is an iphone 13 64GB white colour",
      "mrp": 62999,
      "Sellingprice": 35000,
      "Metadata": {...},
      "stock": 10
    }
  ]
}

🧮 Ranking Logic (High-Level)

Each product is assigned a score based on:

Lower price (cheap preference)

Higher ratings

Stock availability

Popularity (units sold)

Query relevance (title/description match)

Products are returned in descending order of score.
