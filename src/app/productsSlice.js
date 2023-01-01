import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { initialState } from './states';

export const productsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response =  await fetch("https://dummyjson.com/products");
      const data =  await response.json();
      console.log("Get async reducer users");
      console.log(data.products);
      return data.products;
    }
);

export const productsSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        increment: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.cartCounter += 1;
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
      builder
        .addCase(productsAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.products = action.payload;
        });
    },
});

export const selectProducts = (state) => state.app.products;

export const selectCount = (state) => state.app.cartCounter;

export const { increment } = productsSlice.actions;

export default productsSlice.reducer;