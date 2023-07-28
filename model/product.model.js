const products = require("../data/product.json");
const fs = require("fs");

// Get
async function get() {
  return new Promise((res, rej) => {
    res(products);
  });
}

// Create
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

// Update
async function update(payload, products) {
  return new Promise((res, rej) => {
    let productIndex = products.findIndex((item) => item.id == payload.id);
    if (productIndex != -1) {
      products[productIndex] = payload;
      const a = fs.writeFile(
        `${process.cwd()}/data/product.json`,
        JSON.stringify(products),
        {
          encoding: "utf-8",
        },
        (err) => {
          if (err) {
            rej(err);
          } else {
            res({ message: "Update Product" });
          }
        }
      );
    }
  });
}

const ProductModel = {
  get,
  create,
  update,
};

module.exports = ProductModel;
