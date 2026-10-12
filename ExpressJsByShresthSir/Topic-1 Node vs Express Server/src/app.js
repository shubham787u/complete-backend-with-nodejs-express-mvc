// const express = require("express"); //!--> common js sysytem, when "type" : "commonjs",
import express from "express"; //! ES module, "type": "module",
const app = express();

app.get("/", (req, res) => {
  res.send("Hello I'm from Express Server");
});

app.get("/products", (req, res) => {
  const products = [
    { id: 101, item: "iphone 18 pro max", price: 179000 },
    { id: 102, item: "macbook m5", price: 139000 },
  ];
  res.json(products);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/shop", (req, res) => {
  res.send("Shop Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express Server is running on http://localhost:${PORT}`);
});

//! ==================================================================================
//!Note point - By Self

//! In Node.js + Express.js, you can use res.json() in different ways depending on the type of data you want to send to the frontend.

//! 1. Common ways to write res.json()
// 1. Send a string
// res.json("Hello Shubham");


//! 2. Send an object
// res.json({
//   name: "Shubham",
//   role: "Developer"
// });


//! 3. Send an array
// res.json(["HTML", "CSS", "JavaScript", "React"]);


//! 4. Send an array of objects
// res.json([
//   { id: 1, name: "Shubham" },
//   { id: 2, name: "Rahul" }
// ]);


//! 5. Send a number
// res.json(100);


//! 6. Send a boolean
// res.json(true);


//! 7. Send null
// res.json(null);


//! 8. Send nested objects
// res.json({
//   user: {
//     name: "Shubham",
//     email: "shubham@example.com"
//   },
//   address: {
//     city: "Noida",
//     state: "Uttar Pradesh"
//   }
// });


//! 9. Send success or error messages
// res.json({
//   success: true,
//   message: "User registered successfully"
// });


//! 10. Send data with status codes
// res.status(201).json({
//   success: true,
//   message: "User created successfully",
//   data: {
//     id: 1,
//     name: "Shubham"
//   }
// });


//! 2. Other useful patterns
//! Pattern	                  //!Example	                                             //!Use case
// res.json()	                res.json(data)	                                      Send JSON response
// res.status().json()	      res.status(404).json({message: "Not found"})	        Send JSON with HTTP status
// res.send()               	res.send("Hello")	                                    Send text or other supported response content
// res.end()	                res.end()	                                            End the response without a body
// res.redirect()	            res.redirect("/login")	                              Redirect the browser

//! 3. Best professional structure for APIs
// For MERN projects, a consistent response structure is useful:

// app.get("/api/users", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Users fetched successfully",
//     count: 2,
//     data: [
//       { id: 1, name: "Shubham" },
//       { id: 2, name: "Rahul" }
//     ]
//   });
// });


//! The frontend can then access the values like this:
// const response = await fetch("/api/users");
// const result = await response.json();

// console.log(result.message);
// console.log(result.count);
// console.log(result.data);


//! Remember: res.json() accepts any JavaScript value that can be serialized to JSON. In real APIs, objects and arrays are the most common choices, usually with a consistent structure containing success, message, and data.
