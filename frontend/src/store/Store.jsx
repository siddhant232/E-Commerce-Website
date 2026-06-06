
import React from 'react'

import { configureStore } from '@reduxjs/toolkit'
import userslice from './user/UserSlice'
import productslice from './product/ProductSlice'
import cartslice from './cart/CartSlice'
import orderslice from './order/OrderSlice'

export const store = configureStore({
  reducer: { 
    userReducer : userslice,
    productReducer : productslice,
    cartReducer : cartslice,
    orderReducer : orderslice
  },
})