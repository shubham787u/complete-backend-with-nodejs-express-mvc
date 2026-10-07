const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //without stream

    
  }
  res.statusCode(200);
  res.write();
});

server.listen(3000, () => {
  console.log("App listening on port 3000!");
});
