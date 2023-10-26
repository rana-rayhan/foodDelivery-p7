const Products = require("../models/productModel");
//
//
// view product || get req
const viewProduct = async (req, res) => {
  try {
    const productList = await Products.find();
    if (!productList) throw Error("Product not found");
    res.status(200).json(productList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
// add a product || post req
const addProduct = async (req, res) => {
  try {
    const { image, name, price, desc, category } = req.body;

    if (!name || !price) throw Error("Name & Price must be filled");
    const newProduct = await Products.create({ ...req.body });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
//
//
// export module
module.exports = {
  viewProduct,
  addProduct,
};
