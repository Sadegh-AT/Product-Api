const http = require("http");
const product = require("./data/product.json");

const PORT = 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (req.url == "/api/product/name") {
      res.writeHead(200, { "Content-Type": "application/json" });
      let productName = product.map((item) => item.name);
      res.end(JSON.stringify(productName, null, 4));
    } else if (req.url == "/api/product/info") {
      res.writeHead(200, { "Content-Type": "application/json" });
      let productInfo = product.map((item) => item.info);
      res.end(JSON.stringify(productInfo, null, 4));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  })
  .listen(PORT, () => {
    console.log(`run server on port ${PORT} http://localhost:${PORT}`);
  });
