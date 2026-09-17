//! Common js - modules.exports, require(" path")
//1. modules.exports, require(" path")

//! module js | ES module - export, import
//1.default expoet, import
//2. named import, export

const obj = require("./app.js");

console.log(obj.findSum(2, 2));
console.log(obj.findPower(2, 2));
console.log(obj.greeting("Raj"));
