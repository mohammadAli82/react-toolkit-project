import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import { fetchProducts } from './productsApi';

const initialValue={
    products:[],
    staus:'idle',
};

export const fetchAsync=createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const response=await fetchProducts();
        return response.data;
    }
);

export const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(incrementAsync.pending,(state)=>{
            state.status="loading";
        });
        builder
        .addCase(incrementAsync.fulfilled,(state,action)=>{
            state.status="idle";
            state.value+=action.payload;
        });
    }
});

export const {increment,decrement,incrementByAmount}=productsSlice.actions;
productsSlice.reducers;