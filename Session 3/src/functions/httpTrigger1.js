const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("req", req.url);
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("about Page");
  } else {
    res.end("Not Found Page");
  }
});

server.listen(3001, () => {
  console.log("Listen port 3001");
});
