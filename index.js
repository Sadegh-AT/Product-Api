const http = require("http");
const product = require("./data/product.json");
const ProductController = require("./controllers/product.controllers");

const PORT = 3000;
http
  .createServer((req, res) => {
    if (req.url == "/api/product") {
      ProductController.get(req, res);
    } else {
    }
  })
  .listen(PORT, () => {
    console.log(`run server on port ${PORT} http://localhost:${PORT}`);
  });
