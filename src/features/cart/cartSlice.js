import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchItems } from './cartApi';
import { deleteItem } from './cartApi';
import { addItem } from './cartApi';
import { updateItem } from './cartApi';

const initialState = {
  items: [],
  status: 'idle',
};

export const addAsync = createAsyncThunk(
  'cart/fetchItem',
  async (item) => {
    const response = await addItem(item) // API endpoint should be updated accordingly
    return response.data;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(addAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default cartSlice.reducer;
