const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/users.route");
const productRoute = require("./routes/product.route");

const app = express();
//
//
// middleware 
app.use(cors());
// app.use(express.static("public"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
//
//
// middleware for checking request method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//
//
// Routes handle middilware
app.use("/user", userRoute);
app.use("/product", productRoute);
//
// error route
app.use("*", (req, res) => res.send("404 page not found"));
//
//server error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//
//
// export app to index file
module.exports = app;
