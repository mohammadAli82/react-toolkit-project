// store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer
    // Add other reducers here if needed
  },
});

export default store;
