
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import Products from '../pages/Products';

const initialState = {
    Products : [],
}

const productslice = createSlice({
    name : "product",
    initialState,
    reducers : {
        loadproduct : (state,action)=>{
            state.Products = action.payload;
        }
    }
});

export const {loadproduct} = productslice.actions;
export default productslice.reducer;