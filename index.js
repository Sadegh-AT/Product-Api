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
//     } else if (
//       req.url.match(/^\/api\/product\/catagory\/[ab]$/) &&
//       req.method == "GET"
//     ) {
//       ProductController.getByCatagory(req, res);
//     } else {
//       ErrorHandler.NotFound(req, res);
//     }
//   })
//   .listen(PORT, () => {
//     console.clear();
//     console.log(`run server on port ${PORT} http://localhost:${PORT}`);
//   });

const fs = require("fs");

fs.readdir("./", (err, files) => {
  if (!err) {
    fs.readdir(`./${files[10]}`, (err, file) => {
      if (file) {
        console.log(file);
      } else {
        const data = fs.readFileSync(`./${files[10]}`, "utf-8");
        console.log(data.toString());
      }
    });
  }
});
