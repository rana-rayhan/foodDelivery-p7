const {
  viewProduct,
  addProduct,
} = require("../controllers/porduct.controller");

const route = require("express").Router();
//
//
// view product || get req
route.get("/", viewProduct);
//
//
// add a product || post req
route.post("/", addProduct);
//
//
// export module
module.exports = route;
