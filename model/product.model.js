const products = require("../data/product.json");

async function get() {
  return new Promise((res, rej) => {
    res(products);
  });
}
async function create(product) {
  return new Promise((res, rej) => {
    try {
      products.push(product);

      console.log("New Product Add");
      res();
    } catch (error) {
      console.log(error);
      rej();
    }
  });
}

const ProductModel = {
  get,
  create,
};

module.exports = ProductModel;
