const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("products", productSchema);

module.exports = Products;
