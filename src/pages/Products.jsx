
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const Products = useSelector((state) => state.productReducer.Products);
  
  
  const ProductsRender = Products.map((Product)=>{
    return (
      
     <Link
        to={`/products/${Product.id}`}
        key={Product.id}
        className='p-2 m-3 w-[230px] h-[300px] bg-slate-100 shadow hover:shadow-lg transition flex flex-col overflow-hidden'
      >
        {/* Image */}
        <div className='h-36 w-full bg-gray-100 overflow-hidden rounded'>
          <img
            src={Product.img}
            alt={Product.title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Body */}
        <div className='p-3 flex-1'>
          <h2 className='font-semibold text-sm line-clamp-1'>
            {Product.title}
          </h2>
          <p className='text-sm mt-1'>₹{Product.price}</p>
        </div>

        {/* Footer */}
        <div className='p-3'>
          <button className='w-full bg-gray-500 text-white py-2 rounded-lg'>
            Add to Cart
          </button>
        </div>
      </Link>
    )
  });

  return (
    <>
    <div className='p-2 m-2 text-gray-500 text-3xl'>Products</div>
    <div className='w-full h-screen bg-white text-black flex gap-2'>
      {ProductsRender}
    </div>
    </>
  )
}

export default Products;