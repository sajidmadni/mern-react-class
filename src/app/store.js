import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    products: productsReducer,
  },
});