
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
  const [Quantity, setQuantity] = useState(0);
  const [Addedcart, setAddedcart] = useState(0);
  const param = useParams()
  console.log(param.id);
  const Products = useSelector((state) => state.productReducer.Products)
  const Product = Products.find(p => p.id == param.id)
  console.log(Product);

  if (!Product) {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-500 font-medium tracking-wide">Loading Product Details...</p>
      </div>
    );
  }

  const increment = () => {
    setQuantity(Quantity + 1);
  };

  const decrement = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 1);
    }
  }

  const fill_heart = () => {
    if (Addedcart == 0) {
      setAddedcart(1);
    }
    else {
      setAddedcart(0);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-slate-800 bg-white min-h-screen font-sans animate-in fade-in duration-500">

      {/* Top Breadcrumb (Static UI enhancement) */}
      <nav className="flex text-sm text-slate-500 mb-8 w-full border-b border-slate-100 pb-4">
        <ol className="flex items-center space-x-2">
          <li className="cursor-pointer hover:text-slate-800 transition-colors">Home</li>
          <li><span className="mx-2 text-slate-300">/</span></li>
          <li className="cursor-pointer hover:text-slate-800 transition-colors">Products</li>
          <li><span className="mx-2 text-slate-300">/</span></li>
          <li className="font-bold text-slate-900 border-b border-slate-900 pb-0.5">{Product.category || "Details"}</li>
        </ol>
      </nav>

      {/* Main Layout: Image Left, Info Right */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* LEFT: Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-[500px] w-full rounded-[2rem] overflow-hidden flex items-center justify-center group shadow-sm transition-shadow hover:shadow-lg bg-transparent border border-slate-100">
            <img
              src={Product.img}
              alt={Product.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="w-full lg:w-1/2 flex flex-col py-2">
          <div className="border-b border-slate-200 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {Product.title}
            </h1>

            {/* Rating Configuration (Static Mock as Requested) */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex text-yellow-400 text-lg">
                ★★★★<span className="text-slate-300">★</span>
              </div>
              <span className="text-sm font-bold text-slate-400 hover:text-slate-900 cursor-pointer transition-colors underline-offset-4 hover:underline">
                (128 Reviews)
              </span>
            </div>

            <div className="text-3xl font-extrabold text-slate-900 mt-2">
              Rs. {Product.price}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Description</h3>
            <p className="text-slate-600 font-medium leading-relaxed text-lg">
              {Product.description}
            </p>
          </div>

          <div className="mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-end">

              {/* Quantity */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Quantity</h3>
                <div className="flex items-center border border-slate-300 rounded-xl h-14 w-36 bg-white overflow-hidden shadow-sm hover:border-slate-400 transition-colors">
                  <button
                    onClick={decrement}
                    className="w-1/3 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors font-bold text-2xl active:bg-slate-200"
                  >
                    −
                  </button>
                  <div className="w-1/3 h-full flex items-center justify-center text-slate-900 font-bold text-lg border-x border-slate-200 bg-slate-50/50">
                    {Quantity}
                  </div>
                  <button
                    onClick={increment}
                    className="w-1/3 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors font-bold text-2xl active:bg-slate-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart / Heart */}
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={fill_heart}
                  className="flex-1 h-14 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl shadow-slate-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Add to Cart
                </button>
                <div className={`h-14 w-14 border-2 rounded-xl flex items-center justify-center text-2xl transition-all shadow-sm ${Addedcart > 0 ? "border-red-200 bg-red-50 text-red-500 shadow-md shadow-red-100" : "border-slate-300 bg-white text-slate-400"}`}>
                  {Addedcart > 0 ? "♥" : "♡"}
                </div>
              </div>

            </div>

            {/* Buy Now Option */}
            <button className="w-full mt-4 h-14 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl transition-all shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-300">
              Buy It Now
            </button>
          </div>

          {/* Highlights / Features Area */}
          <div className="mt-2 py-4 border-t border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                Free Priority Fast Shipping everywhere
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                30-Day Hassle-Free Returns
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ------------------------------- */}
      {/* Related Products Mock Section   */}
      {/* ------------------------------- */}
      <div className="mt-20 pt-16 border-t border-slate-200 pb-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">You might also like</h2>
          <span className="text-indigo-600 font-bold hover:text-indigo-800 cursor-pointer hidden sm:block">View all products &rarr;</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 overflow-hidden border border-slate-100 flex items-center justify-center p-6 shadow-sm transition-shadow group-hover:shadow-md">
              <img src={Product.img} alt="related" className="w-full h-full object-contain mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900 truncate">Sleek Design Object A</h3>
            <p className="text-slate-500 font-medium">Rs. {Product.price}</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 overflow-hidden border border-slate-100 flex items-center justify-center p-6 shadow-sm transition-shadow group-hover:shadow-md">
              <img src={Product.img} alt="related" className="w-full h-full object-contain mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900 truncate">Modern Essential Hub</h3>
            <p className="text-slate-500 font-medium">Rs. {Product.price}</p>
          </div>
          <div className="group cursor-pointer hidden md:block">
            <div className="aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 overflow-hidden border border-slate-100 flex items-center justify-center p-6 shadow-sm transition-shadow group-hover:shadow-md">
              <img src={Product.img} alt="related" className="w-full h-full object-contain mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900 truncate">Premium Lifestyle Fit</h3>
            <p className="text-slate-500 font-medium">Rs. {Product.price}</p>
          </div>
          <div className="group cursor-pointer hidden md:block">
            <div className="aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 overflow-hidden border border-slate-100 flex items-center justify-center p-6 shadow-sm transition-shadow group-hover:shadow-md">
              <img src={Product.img} alt="related" className="w-full h-full object-contain mix-blend-multiply opacity-60 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-bold text-slate-900 truncate">Classic Daily Choice</h3>
            <p className="text-slate-500 font-medium">Rs. {Product.price}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails;