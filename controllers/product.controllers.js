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
          id: generateID(allProducts),
          ...JSON.parse(newProduct),
        };
        allProducts.push(product);
        let resault = await ProductModel.create(allProducts);
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
        const allProducts = await ProductModel.get();
        newProduct = JSON.parse(newProduct);
        const resault = allProducts.find((item) => item.id == newProduct.id);
        if (resault) {
          res.writeHead(200, { "Content-Type": "application/json" });
          await ProductModel.update(newProduct, allProducts);
          res.end(JSON.stringify(newProduct));
        } else {
          res.end("We Dont have this Item");
        }
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
        const allProducts = await ProductModel.get();
        idList = JSON.parse(idList);
        idList.forEach((id) => {
          const index = allProducts.findIndex((item) => item.id === id);
          if (index !== -1) {
            allProducts.splice(index, 1);
          }
        });
        res.writeHead(200, { "Content-Type": "application/json" });
        await ProductModel.deleteItem(allProducts);
        res.end(JSON.stringify(allProducts));
      } catch (error) {
        res.end("Error");
      }
    });
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
    keysList.length == 4 &&
    keysList[0] == "name" &&
    keysList[1] == "image" &&
    keysList[2] == "price" &&
    keysList[3] == "category";
  return condition;
}
function validateProductUpdate(obj) {
  let keysList = Object.keys(obj);
  const condition =
    keysList.length == 5 &&
    keysList[0] == "id" &&
    keysList[1] == "name" &&
    keysList[2] == "image" &&
    keysList[3] == "price" &&
    keysList[4] == "category";
  return condition;
}
