const http = require("http");
const product = require("./data/product.json");
const ProductController = require("./controllers/product.controllers");
const ErrorHandler = require("./controllers/errorHandler.controller");

const PORT = 3000;
http
  .createServer((req, res) => {
    // Get All Product
    if (req.url == "/api/product" && req.method == "GET") {
      ProductController.get(req, res);
    }
    // Get Product Name
    else if (req.url == "/api/product/name" && req.method == "GET") {
      ProductController.getName(req, res);
    }
    // Get Product Image
    else if (req.url == "/api/product/image" && req.method == "GET") {
      ProductController.getImage(req, res);
    }
    // Get Product By Id
    else if (req.url.match(/^\/api\/product\/(\d+)$/) && req.method == "GET") {
      ProductController.getById(req, res);
    }
    // Create new Product
    else if (req.url == "/api/product/new" && req.method == "POST") {
      ProductController.create(req, res);
    }
    // Get Product By Catagory
    else if (
      req.url.match(/^\/api\/product\/catagory\/[ab]$/) &&
      req.method == "GET"
    ) {
      ProductController.getByCatagory(req, res);
    }
    // Update Product
    else if (req.url == "/api/product/update" && req.method == "PUT") {
      ProductController.update(req, res);
    }
    // Delete Product
    else if (req.url == "/api/product/delete" && req.method == "DELETE") {
      ProductController.deleteItem(req, res);
    }

    // Error handler
    else {
      ErrorHandler.NotFound(req, res);
    }
  })
  .listen(PORT, () => {
    console.log(`run server on port ${PORT} http://localhost:${PORT}`);
  });
