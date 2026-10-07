const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //!with stream
  const readStream = fs.createReadStream("index.html");
  const writeStream = fs.createWriteStream("output.html");
  readStream.pipe(writeStream);
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});

//!Node.js: Without Streams vs With Streams
//! 1. The core idea

// Without streams (buffering): Node loads the entire data into memory first, then you use it.

// With streams: Node processes data in small chunks (default 64 KB for files) as it arrives, so you never hold everything in memory.

// Think of a water tank vs a pipe. Without streams, you fill the whole tank and then use the water. With streams, water flows through the pipe and you use it as it passes.

//!4. The 4 types of streams
//! Type	                Meaning             	                    Example
// Readable	    Source you read from	                            fs.createReadStream, req (HTTP request)
// Writable	    Destination you write to	                        fs.createWriteStream, res (HTTP response)
// Duplex	    Both read and write	TCP socket (net.Socket),        WebSocket
// Transform	Duplex that modifies data in between	            zlib.createGzip(), crypto streams

//!
