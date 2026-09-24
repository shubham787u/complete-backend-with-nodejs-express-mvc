const fs = require("fs");
console.log(fs); // Optional

//! 1. Create Folder--
//! fs.mkdirSync("foldername")

// fs.mkdirSync("logs");
// console.log("Folder Created");

// fs.mkdirSync("logs/parent/child/subchild", { recursive: true });
// console.log("Folder Created");

//!2. Rename Folder
//!fs.renameSync("old folder", "new folder")

// fs.renameSync("dist/parent/logs", "src");
// fs.mkdirSync("logs/parent/child/subchild", { recursive: true });
// console.log("folder rename ");

//!3. Copy Folder
//! fs.cpSync("old path", "new path")

// fs.cpSync("dist/parent/child/", "output", { recursive: true });
// console.log("Folder copy");

//!4. Delete Folder
//! fs.rmdirSync() - old {depricated}
//!fs.rmSync("foldername", { recursive: true })- new

// fs.rmdirSync("logs");
// fs.rmSync("logs", { recursive: true });
// console.log("folder Delete");

//!5. Check Folder Exist or Not
// const isFileExist = fs.existsSync("src/logs");
// console.log(isFileExist); //false

//!6. Read Folder--
// const data = fs.readdirSync("dist");
// console.log(data);

// //! 7. Folder Status
// const fileStatus = fs.statSync("dist");
// const date = new Date(fileStatus.ctime);

// console.log(fileStatus);
// const dd = date.getDate().toString().padEnd(2, "0");
// const mm = (date.getMonth() + 1).toString().padStart(2, "0");
// const yy = date.getFullYear();

// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();

// console.log(`${dd}-${mm}-${yy}`);
// console.log(`${hour}:${minute}:${second}`);
