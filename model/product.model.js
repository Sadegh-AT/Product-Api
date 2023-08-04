const products = require("../data/product.json");
const fs = require("fs");
const ConnectToMongoDB = require("../utils/mongo-connection");
const { ObjectId } = require("mongodb");

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
  const db = await new ConnectToMongoDB().getDB();

  return new Promise((res, rej) => {
    db.collection("products").insertOne(product);
    res(db.collection("products").insertOne(product));
  });
}

// Update
async function update(payload) {
  const db = await new ConnectToMongoDB().getDB();
  const { id, ...payloadWithoutID } = payload;

  return new Promise((res, rej) => {
    let product = db
      .collection("products")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { ...payloadWithoutID } }
      );
    new ConnectToMongoDB().closeDB();
    res(product);
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
