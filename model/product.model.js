const products = require("../data/product.json");
const fs = require("fs");
async function get() {
  return new Promise((res, rej) => {
    res(products);
  });
}
async function create(product) {
  return new Promise((res, rej) => {
    const a = fs.writeFile(
      `${process.cwd()}/data/product.json`,
      JSON.stringify(product),
      {
        encoding: "utf-8",
      },
      (err) => {
        if (err) {
          rej(err);
        } else {
          res({ message: "Create new Product" });
        }
      }
    );
  });
}

const ProductModel = {
  get,
  create,
};

module.exports = ProductModel;
