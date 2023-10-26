import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/Redux/UserSlice";
import viewUserReducer from "../components/Redux/viewUserSlice";
import productReducer from "../components/Redux/ProductSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    viewUser: viewUserReducer,
    products: productReducer,
  },
});

export default store;
