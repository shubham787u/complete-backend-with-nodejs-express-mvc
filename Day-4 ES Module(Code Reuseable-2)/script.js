// import sum from "./app.js"; //default import
// console.log(sum(10, 20));

import product, { sum, pow, greet } from "./app.js"; //named import,  with default import
console.log(pow(2, 2));
console.log(sum(10, 30));
console.log(greet("Raj"));

console.log(product(4, 5));
