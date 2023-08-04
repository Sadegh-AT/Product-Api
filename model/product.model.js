const products = require("../data/product.json");
const fs = require("fs");
const ConnectToMongoDB = require("../utils/mongo-connection");

// Get
async function get() {
  const db = await new ConnectToMongoDB().getDB();
  return new Promise((res, rej) => {
    const result = db.collection("products").find({}).toArray();
    res(result);
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
      let newProduct = {
        id: payload.id ? payload.id : products[productIndex].id,
        name: payload.name ? payload.name : products[productIndex].name,
        image: payload.image ? payload.image : products[productIndex].image,
        price: payload.price ? payload.price : products[productIndex].price,
        category: payload.category
          ? payload.category
          : products[productIndex].category,
      };
      products[productIndex] = newProduct;
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

// Delete
async function deleteItem(products) {
  return new Promise((res, rej) => {
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
          res({ message: "Delete Product" });
        }
      }
    );
  });
}

const ProductModel = {
  get,
  create,
  update,
  deleteItem,
};

module.exports = ProductModel;
