import getUsers from "./users.js";
import getProduct from "./product.js";

const userBasket = [
  { id: 1, productID: 1, userID: 4, count: 2 },
  { id: 2, productID: 3, userID: 3, count: 4 },
  { id: 3, productID: 4, userID: 3, count: 7 },
  { id: 3, productID: 1, userID: 1, count: 3 },
  { id: 3, productID: 4, userID: 1, count: 1 },
];

let newList = [];

export function getUserBasket() {
  let UserObj = null;
  let Productobj = null;
  getUsers().then((users) => {
    users.forEach((user) => {
      userBasket.forEach((item) => {
        if (user.id == item.userID) {
          UserObj = {
            id: item.userID,
            name: user.name,
            age: user.age,
            productList: [],
          };
          if (!newList.find((i) => i.id == user.id)) {
            newList.push(UserObj);
          }
        }
      });
    });
  });
  getProduct().then((products) => {
    products.forEach((product) => {
      userBasket.forEach((item) => {
        if (product.id == item.productID) {
          Productobj = {
            productName: product.name,
            count: item.count,
            totalPrice: product.price * item.count,
          };
          newList
            .find((user) => user.id == item.userID)
            .productList.push(Productobj);
        }
      });
    });
    console.log(newList);
  });
}
