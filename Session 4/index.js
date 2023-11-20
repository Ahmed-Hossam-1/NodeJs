const http = require("node:http");

const fs = require("fs");
const homePage = fs.readFileSync("./views/index.html", "utf-8");

const server = http.createServer((req, res) => {
  res.write(homePage);
  res.end();
});

server.listen(5000, "localhost", () => {
  console.log("listening on port 5000");
});
