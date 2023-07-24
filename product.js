const product = [
  { id: 1, name: "sib", price: 180 },
  { id: 2, name: "hoolo", price: 250 },
  { id: 3, name: "moz", price: 110 },
  { id: 4, name: "anbe", price: 80 },
];
export default function getProduct() {
  return new Promise((res, rej) => {
    if (product.length > 0) {
      res(product);
    } else {
      rej(new Error("No Product"));
    }
  });
}
