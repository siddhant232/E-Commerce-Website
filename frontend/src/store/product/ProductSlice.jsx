
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import Products from '../../pages/Products';

const initialState = {
    Products : [],
    Loading : false,
    Error : null,
}

const productslice = createSlice({
    name : "product",
    initialState,
    reducers : {
        loadproduct : (state,action)=>{
            state.Products = action.payload;
        },
        setLoading : (state,action)=>{
            state.Loading = action.payload;
        },
        setError : (state,action)=>{
            state.Error = action.payload;
        }
    }
});

export const {loadproduct,setLoading,setError} = productslice.actions;
export default productslice.reducer;