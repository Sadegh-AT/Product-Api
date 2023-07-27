const ProductModel = require("../model/product.model");

async function getProductControllers(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {}
}
