// const http = require("http");
// const product = require("./data/product.json");
// const ProductController = require("./controllers/product.controllers");
// const ErrorHandler = require("./controllers/errorHandler.controller");

// const PORT = 3000;
// http
//   .createServer((req, res) => {
//     if (req.url == "/api/product" && req.method == "GET") {
//       ProductController.get(req, res);
//     } else if (req.url == "/api/product/name" && req.method == "GET") {
//       ProductController.getName(req, res);
//     } else if (req.url == "/api/product/image" && req.method == "GET") {
//       ProductController.getImage(req, res);
//     } else if (
//       req.url.match(/^\/api\/product\/(\d+)$/) &&
//       req.method == "GET"
//     ) {
//       ProductController.getById(req, res);
//     } else if (req.url == "/api/product/new" && req.method == "POST") {
//       ProductController.create(req, res);
//     } else {
//       ErrorHandler.NotFound(req, res);
//     }
//   })
//   .listen(PORT, () => {
//     console.clear();
//     console.log(`run server on port ${PORT} http://localhost:${PORT}`);
//   });
console.clear();

const fs = require("fs");

fs.readFile("./test.txt", (err, data) => {
  if (!err) {
    console.log(data.toString());
  }
});
