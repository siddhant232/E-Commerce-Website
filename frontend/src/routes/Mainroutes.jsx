
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/ProductDetails'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/products' element = {<Products/>}></Route>
            <Route path='/products/:id' element = {<ProductDetails/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
            <Route path='/register' element = {<Register/>}></Route>
            <Route path='/createproduct' element = {<CreateProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes;