//! 1-- Built-in Module---(fs Module)------------------------------------------
const fs = require("fs");
// console.log(fs);

//! 1. Create File-
//! fs.writeFileSync("filename.ext", "content")

// fs.writeFileSync("demo.txt", "ya to win hai ya to learn hai");
// fs.writeFileSync("demo1.txt", "Bhai ye dusari line hai");
// fs.writeFileSync("src/script.js", "console.log('Hello Developer');");
// console.log("Write File Created");

//! 2. Read File -
//! fs.readFileSync("filename")
// const fileData = fs.readFileSync("demo.txt"); //<Buffer 79 61 20 74 6f 20 77 69 6e 20 68 61 69 20 79 61 20 74 6f 20 6c 65 61 72 6e 20 68 61 69>
//  const fileData = fs.readFileSync("demo.txt", "utf-8"); //ya to win hai ya to learn hai
// console.log(fileData);
// console.log(fileData.toString());//ya to win hai ya to learn hai
// console.log(typeof fileData); //object
// console.log(Buffer.isBuffer(fileData)); //true
// console.log("Read file Complete");

//! 3. Update file (appendFileSync)-
//! fs.appendFileSync()
// fs.writeFileSync("demo.txt", "ya to win hai ya to learn hai\n");

// fs.appendFileSync("demo.txt", "Nobita\n");
// fs.appendFileSync("demo.txt", "Shizuka\n");
// fs.appendFileSync("src/script.js", "\nconsole.log('Samjh raho ho na');");
// console.log("Update file done");

//! 4. Delete file (unlinkSync)-
//!fs.unlinkSync()

// fs.unlinkSync("demo1.txt");
// console.log("Delete Conform");

//! 5. Rename File or  Move File
//!fs.renameSync("oldfile", "newfile")

// fs.renameSync("src/script.js", "src/index.js");
// fs.renameSync("src/script.js", "src/main.js");

// console.log("Rename Complete");

//! 6. Copy File
//! fs.copyFileSync("Source file path", "destination file path")
//! fs.mkdirSync("folder name")

// fs.mkdirSync("dist");
// fs.copyFileSync("src/index.js", "dist/main.js");
// console.log("Copy file complete");

