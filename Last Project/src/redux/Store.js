// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import productsReducer from './ProductsSlice';
import orderReducer from './OrderSlice'; // Import the order reducer

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
  orders: orderReducer, // Add the orders reducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
