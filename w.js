let x = {
  name: "sad",
  image: 123,
  price: 123,
};

console.log(Object.keys(x));

function validateProduct(obj) {
  let keysList = Object.keys(obj);
  const condition =
    keysList.length == 4 &&
    keysList[0] == "name" &&
    keysList[1] == "image" &&
    keysList[2] == "price";
    keysList[3] == "category";
  return condition;
}

console.log(validateProduct(x));
