
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const { Products, Loading, Error } = useSelector((state) => state.productReducer);
  
  if (Loading) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-slate-50">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium tracking-wide">Fetching awesome products...</p>
      </div>
    );
  }

  if (Error) {
    return (
      <div className="w-full h-[70vh] flex flex-col items-center justify-center bg-slate-50">
        <div className="text-red-500 text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Oops! Something went wrong.</h2>
        <p className="text-slate-500">{Error}</p>
        <button className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }
  
  const ProductsRender = Products.map((Product)=>{
    return (
      
     <Link
        to={`/products/${Product.id}`}
        key={Product.id}
        className='w-[280px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden group'
      >
        {/* Image */}
        <div className='h-52 w-full bg-white overflow-hidden flex items-center justify-center p-6 border-b border-slate-50'>
          <img
            src={Product.img}
            alt={Product.title}
            className='w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500'
          />
        </div>

        {/* Body */}
        <div className='p-5 flex-1 flex flex-col'>
          <div className="flex justify-between items-start mb-3">
             <span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">{Product.category}</span>
             <span className="text-xs font-bold text-slate-600 flex items-center shadow-sm px-2 py-1 bg-slate-50 border border-slate-100 rounded-md">⭐ {Product.rating?.rate || "N/A"}</span>
          </div>

          <h2 className='font-bold text-slate-900 text-base line-clamp-1 mb-1'>
            {Product.title}
          </h2>
          <p className='text-xs text-slate-500 line-clamp-2 mb-4 flex-1 leading-relaxed'>
            {Product.description}
          </p>

          <div className='text-2xl font-extrabold text-slate-900 mt-auto'>
            ${Product.price}
          </div>
        </div>

        {/* Footer */}
        <div className='p-4 pt-0'>
          <button className='w-full bg-slate-900 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-sm'>
            View Details
          </button>
        </div>
      </Link>
    )
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4'>
        <h1 className='text-4xl font-extrabold text-slate-900 tracking-tight'>All Products</h1>
        <p className="text-slate-500 mt-2 font-medium">Discover our collection of premium items.</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full flex flex-wrap gap-6 mt-4'>
        {ProductsRender}
      </div>
    </div>
  )
}

export default Products;