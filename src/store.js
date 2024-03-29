import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modelSlice from "./features/model/modelSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modelSlice,
  },
});
