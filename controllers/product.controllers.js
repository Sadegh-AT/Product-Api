const ProductModel = require("../model/product.model");

// Get All Product
async function get(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products, null, 4));
  } catch (error) {}
}
// Get All Product Name
async function getName(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    let productName = products.map((item) => item.name);
    res.end(JSON.stringify(productName, null, 4));
  } catch (error) {}
}

// Get All Product Image
async function getImage(req, res) {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    let productImage = products.map((item) => item.image);
    res.end(JSON.stringify(productImage, null, 4));
  } catch (error) {}
}

// Get Product by ID
async function getById(req, res) {
  try {
    const products = await ProductModel.find();
    let productId = req.url.split("/");
    let product = products.filter((item) => item.id == productId[3]);
    if (product.length == 0) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Bad Request: " + productId[3]);
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(...product, null, 4));
    }
  } catch (error) {
    console.log(error);
  }
}

// Create New Product
async function create(req, res) {
  try {
    const allProducts = await ProductModel.find();
    const product = {
      id: allProducts.length + 1,
      name: `Product ${allProducts.length + 1}`,
      image: "https://example.com/product1.jpg",
      price: 29.99,
    };
    ProductModel.create(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {}
}

const ProductController = {
  get,
  getName,
  getImage,
  getById,
  create,
};

module.exports = ProductController;
