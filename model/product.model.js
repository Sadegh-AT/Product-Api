const product = require("../data/product.json");

async function find() {
  return new Promise((res, rej) => {
    res(product);
  });
}
async function create(product) {
  return new Promise((res, rej) => {
    try {
      console.log(product);
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
