const { error } = require("console");
const fs = require("fs");
// console.log(fs);

//!Create File -
//!fs.writeFile("filename", "content or data", error_first_callback)
// fs.writeFile("demo.txt", "Hello Developer", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Demo file created");
// });

//!Read File-
// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(data);
//   }
// });

//! Update File-
// fs.appendFile("demo.txt", "\nNode js Backend", (error) => {
//   if (error) return console.log(error);
//   console.log("Demo file updated");
// });

//! Delete File -
// fs.unlink("demo.txt", (error) => {
//   if (error) return console.log(error);
//   console.log("File deleted");
// });

//!Create Folder
//! fs.mkdir(folder_name, (recursive: true), callback)
// fs.mkdir("src/A/B/C", { recursive: true }, (err) => {
//   if (err) return console.log(err);
//   console.log("Folder Created");
// });

//!Remove Folder
// fs.rm("src", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   console.log("Folder Delete Successfully");
// });

//! Rename Folder - Task

// fs.rename("dist", "logic", (err) => {
//   if (err) return console.log(err);
//   console.log("Folder Rename");
// });

//!Copy Folder - Task

// fs.cp("logic", "output", { recursive: true }, (err) => {
//   if (err) return console.log(err);
//   console.log("Copy Successfully");
// });

//! Callback Hell-

// fs.mkdir("demo", (error) => {
//   if (error) return console.log("folder created :  ", error);

//   fs.writeFile("demo/f1.txt", "Hello Dve\n", (error) => {
//     if (error) return console.log("File created: ", error);

//     fs.readFile("demo/f1.txt", "utf-8", (error, data) => {
//       if (error) return console.log("File read:", error);
//       console.log(data);

//       fs.appendFile("demo/f1.txt", `${data} smth rhe ho`, (error) => {
//         if (error) return console.log("Update file error:", error);
//       });
//     });
//   });
// });
