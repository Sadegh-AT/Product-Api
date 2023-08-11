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
        if (!validateProductCreate(JSON.parse(newProduct))) {
          throw new Error();
        }
        const allProducts = await ProductModel.get();
        const product = {
          ...JSON.parse(newProduct),
        };
        let resault = await ProductModel.create(product);
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log(resault);
        res.end(JSON.stringify(product));
      } catch (error) {
        res.end("Please Check Pruduct Keys");
      }
    });
}
// Get By category
async function getByCategory(req, res) {
  try {
    const products = await ProductModel.get();
    let productCategory = req.url.split("/")[4];

    let product = products.filter(
      (item) => item.category == productCategory.toUpperCase()
    );
    console.log(product);
    if (product.length == 0) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("We dont have this category: " + productCategory);
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product, null, 4));
    }
  } catch (error) {
    console.log("Error");
  }
}

// Update Product
async function update(req, res) {
  let newProduct = "";
  req
    .on("data", (chunk) => {
      newProduct += chunk.toString();
    })
    .on("end", async () => {
      try {
        console.log(newProduct);
        if (!validateProductUpdate(JSON.parse(newProduct))) {
          throw new Error();
        }
        newProduct = JSON.parse(newProduct);

        res.writeHead(200, { "Content-Type": "application/json" });
        await ProductModel.update(newProduct);
        res.end(JSON.stringify(newProduct));
      } catch (error) {
        console.log(error);
        res.end("please input body to your request");
      }
    });
}

// Delete Product
async function deleteItem(req, res) {
  let idList = "";
  req
    .on("data", (chunk) => {
      idList += chunk.toString();
    })
    .on("end", async () => {
      try {
        if (idList.length == 0) {
          throw new Error();
        }
        idList = JSON.parse(idList);

        res.writeHead(200, { "Content-Type": "application/json" });
        await ProductModel.deleteItem(idList);
        res.end("deleted");
      } catch (error) {
        res.end(error.message);
      }
    });
}
async function deleteAll(req, res) {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });
    await ProductModel.deleteItem("deleteAll");
    res.end("deletedAll");
  } catch (error) {
    console.log(error.message);
  }
}

const ProductController = {
  get,
  getName,
  getImage,
  getById,
  create,
  getByCategory,
  update,
  deleteItem,
  deleteAll,
};

module.exports = ProductController;

function generateID(products) {
  if (products.length != 0) {
    let lastItem = products[products.length - 1];
    return lastItem.id + 1;
  } else {
    return 1;
  }
}

function validateProductCreate(obj) {
  let keysList = Object.keys(obj);
  const condition =
    keysList[0] == "name" &&
    keysList[1] == "image" &&
    keysList[2] == "price" &&
    keysList[3] == "category";
  return condition;
}
function validateProductUpdate(obj) {
  let keysList = Object.keys(obj);
  let secondCondition;
  const firstCondition =
    keysList.length >= 1 && keysList.length <= 5 && keysList[0] == "id";

  if (firstCondition) {
    keysList.shift();
    secondCondition = keysList.every(
      (keys) =>
        keys == "name" ||
        keys == "image" ||
        keys == "price" ||
        keys == "category"
    );
    if (secondCondition) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
