import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
