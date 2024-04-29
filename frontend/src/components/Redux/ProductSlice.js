import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const baseUrl = process.env.REACT_APP_API_URL;

// fetch product from database
export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    try {
      const res = await axios.get(`${baseUrl}/product`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

// step 1: create slice
const ProductSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    cartItem: [],
    isModalOpen: false,
    modalText: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    addNewProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);

      if (check) {
        console.log("item is avilable");
      } else {
        console.log("item is added");
        const total = action.payload.price;
        state.cartItem = [
          { ...action.payload, qty: 1, total: total },
          ...state.cartItem,
        ];
      }
    },
    deleteCartItem: (state, action) => {
      const filterItem = state.cartItem.filter(
        (el) => el._id !== action.payload
      );
      state.cartItem = filterItem;
      state.isModalOpen = true;
      state.modalText = "Item is deleted";
    },
    inCartItem: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    deCartItem: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = --qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].total = total;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {
  addNewProduct,
  addCartItem,
  deleteCartItem,
  inCartItem,
  deCartItem,
} = ProductSlice.actions;

export default ProductSlice.reducer;
