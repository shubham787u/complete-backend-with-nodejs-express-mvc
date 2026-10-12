import http from "http";//! "type" : "Module" ---> ES module js

const server = http.createServer((req, res) => {
  res.end("Hello I'm from Server.js ji");
});

const PORT = 4600;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT} `);
});
