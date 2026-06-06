
import React from 'react'
import { NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight cursor-default">
              StoreFront
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <NavLink to="/" className={({isActive}) => `text-sm font-bold transition-all ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
              Home
            </NavLink>
            <NavLink to="/products" className={({isActive}) => `text-sm font-bold transition-all ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
              Products
            </NavLink>
            <NavLink to="/CreateProduct" className={({isActive}) => `text-sm font-bold transition-all ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`}>
              Create Product
            </NavLink>
            <div className="h-5 w-px bg-gray-300 mx-2"></div>
            <NavLink to="/login" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-bold transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 active:scale-95 flex items-center gap-2">
              Sign In
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;