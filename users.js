const users = [
  { id: 1, name: "sadegh", age: 18 },
  { id: 2, name: "ahmad", age: 18 },
  { id: 3, name: "fatemeh", age: 20 },
  { id: 4, name: "medina", age: 17 },
];

export default function getUsers() {
  return new Promise((res, rej) => {
    if (users.length > 0) {
      res(users);
    } else {
      rej(new Error("No User"));
    }
  });
}
