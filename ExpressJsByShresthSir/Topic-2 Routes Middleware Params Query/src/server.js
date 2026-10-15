import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json()); //built-in json middleware

//!In nodejs there are 3 types of middleware- In-built middleware(express.json()), User-define, Third-party middleware(npm i cors(), helmet(), ratelimter())
//!this is in-built middleware
// app.use((req, res, next) => {
//   //! req object, res object, next funtion, from inside of middleware
//   console.log("Middleware");
//   next(); //!middleware
// });

const productsArr = [
  { id: 1, item: "Macbook", price: 149000 },
  { id: 2, item: "Iphone 18 pro max", price: 179000 },
  { id: 3, item: "Samsung Galaxy Tab", price: 90000 },
];

//!Home Route
app.get("/", (req, res) => {
  console.log("Home Page Route Handler");
  res.send("Home Page");
});

//!Create Product
app.post("/create-product", (req, res) => {
  const data = req.body;
  console.log(data);

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "Data not found",
    });
  }

  if (Array.isArray(data)) {
    productsArr.push(...data);

    return res.status(201).json({
      success: true,
      message: "Product Created",
      data: productsArr,
    });
  }

  productsArr.push(data);

  return res.status(201).json({
    success: true,
    message: "Product Created",
    data: productsArr,
  });
});

//! Get All Products Route
app.get("/products", (req, res) => {
  res.status(200).json(productsArr);
});

//! Get Single Product Route -- *not run this route
app.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  const product = productArr.find(
    (element) => element.id === Number(productId),
  );

  if (!product) {
    return res.status(400).json({
      success: false,
      message: "Products Not Found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Product Found",
    data: product,
  });
});

//! Update Single Product - not work
app.put("/update-product/:productId", (req, res) => {
  const { productId } = req.params;
  const newProduct = req.body;

  const existingProductIndex = productsArr.findIndex(
    (element) => element.id === Number(productId),
  );

  if (!existingProductIndex < 0) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  newProduct = { id: Number(productId), ...newProduct };

  productsArr[existingProductIndex] = newProduct;

  return res.status(200).json({
    success: true,
    message: "Product Updated",
    data: productsArr,
  });
});

//! Update one field - Patch
app.patch("/update-product/:productId", (req, res) => {
  const { productId } = req.params;
  const newProductData = req.body;

  const existingProductIndex = productsArr.findIndex(
    (element) => element.id === Number(productId),
  );

  console.log("existingProductsIndex:", existingProductIndex);

  if (existingProductIndex < 0) {
    return res.status(400).json({
      success: false,
      message: "Product Not Found",
    });
  }

  console.log(productsArr[existingProductIndex]);

  productsArr[existingProductIndex] = {
    ...productsArr[existingProductIndex],
    ...newProductData,
  };

  res.status(200).json({
    success: true,
    message: "Products Price Updated",
    data: productsArr[existingProductIndex],
  });
});

const PORT = process.env.PORT || 4600;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/**
 * ! Important Status Code
    100 - 199 = Information
    200 - 299 = Success Response
    300 - 399 = Redirectional
    400 - 499 = Client Error
    500 - 599 = Server Error
*/
