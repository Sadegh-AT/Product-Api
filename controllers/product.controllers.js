const ProductModel = require("../model/product.model");

async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products, null, 4));
  } catch (error) {}
}

const ProductController = {
  get,
};

module.exports = ProductController;
