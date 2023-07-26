// Try-Catch-Finally

try {
  let a = 1;
  throw { mesage: "dawdawd" };
  console.log(a);
} catch (error) {
  console.log(error.mesage);
}
