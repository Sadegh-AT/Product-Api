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
    res(product);
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
async function deleteItem(idList) {
  const db = await new ConnectToMongoDB().getDB();
  if (idList == "deleteAll") {
    const resault = await db.collection("products").deleteMany({});
    console.log(resault);
  } else {
    for (let index = 0; index < idList.length; index++) {
      let resault = await db
        .collection("products")
        .findOneAndDelete({ _id: new ObjectId(idList[index]) });
      console.log(resault);
    }
  }
  return new Promise((res, rej) => {
    res("All item Deleted");
  });
}

const ProductModel = {
  get,
  create,
  update,
  deleteItem,
};

module.exports = ProductModel;
