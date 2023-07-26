let a = 0;
let x = setInterval(() => {
  a += 1;
  console.log("Sadegh: " + a);
}, 10);

setTimeout(function () {
  clearInterval(x);
}, 2000);
