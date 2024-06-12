import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItems,addItem,updateItem,deleteItem } from './cartApi';
import { fetchAsync } from '../products/productsSlice';

const initialState = {
  items: [],
  status: 'idle',
};

export const addAsync = createAsyncThunk(
  'cart/addItems',
  async (item) => {
    const response = await fetchcart(item);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload)
      });
  },
});

// export const { } = cartSlice.actions;

export default cartSlice.reducer;
