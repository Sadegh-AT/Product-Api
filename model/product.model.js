const products = require("../data/product.json");

async function find() {
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
  find,
  create,
};

module.exports = ProductModel;
