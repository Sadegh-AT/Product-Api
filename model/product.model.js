const product = require("../data/product.json");

async function find() {
  return new Promise((res, rej) => {
    res(product);
  });
}

const ProductModel = {
  find,
};

module.exports = ProductModel;
