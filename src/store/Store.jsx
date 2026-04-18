
import React from 'react'

import { configureStore } from '@reduxjs/toolkit'
import userslice from './UserSlice'
import productslice from './ProductSlice'

export const store = configureStore({
  reducer: { userReducer : userslice,
             productReducer : productslice 
           },
         
})