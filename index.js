const http = require("http");
let users = [
  { id: 1, name: "sadegh" },
  { id: 2, name: "wd" },
  { id: 3, name: "s" },
];
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  })
  .listen(3000, () => {
    console.clear();
    console.log("Port: " + 3000);
  });
