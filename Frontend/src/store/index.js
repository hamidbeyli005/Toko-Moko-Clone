import { configureStore } from "@reduxjs/toolkit";
import products from "./productSlice";
import auth from "./userSlice";
const store = configureStore({
  reducer: { auth, products },
});

export default store;
