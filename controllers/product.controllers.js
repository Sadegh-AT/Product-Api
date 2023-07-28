const ProductModel = require("../model/product.model");

// Get All Product
async function get(req, res) {
  try {
    const products = await ProductModel.get();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products, null, 4));
  } catch (error) {}
}
// Get All Product Name
async function getName(req, res) {
  try {
    const products = await ProductModel.get();
    res.writeHead(200, { "Content-Type": "application/json" });
    let productName = products.map((item) => item.name);
    res.end(JSON.stringify(productName, null, 4));
  } catch (error) {}
}

// Get All Product Image
async function getImage(req, res) {
  try {
    const products = await ProductModel.get();
    res.writeHead(200, { "Content-Type": "application/json" });
    let productImage = products.map((item) => item.image);
    res.end(JSON.stringify(productImage, null, 4));
  } catch (error) {}
}

// Get Product by ID
async function getById(req, res) {
  try {
    const products = await ProductModel.get();
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
  let newProduct = "";
  req
    .on("data", (chunk) => {
      newProduct += chunk.toString();
    })
    .on("end", async () => {
      try {
        const allProducts = await ProductModel.get();
        const product = {
          id: allProducts.length + 1,
          ...JSON.parse(newProduct),
        };
        allProducts.push(product);
        let resault = await ProductModel.create(allProducts);
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log(resault);
        res.end(JSON.stringify(product));
      } catch (error) {}
    });
}
// Get By Catagory
async function getByCatagory(req, res) {
  try {
    const products = await ProductModel.get();
    let productCatagory = req.url.split("/")[4];

    let product = products.filter(
      (item) => item.catagory == productCatagory.toUpperCase()
    );
    console.log(product);
    if (product.length == 0) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("We dont have this catagory: " + productCatagory);
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product, null, 4));
    }
  } catch (error) {
    console.log("Error");
  }
}

const ProductController = {
  get,
  getName,
  getImage,
  getById,
  create,
  getByCatagory,
};

module.exports = ProductController;
