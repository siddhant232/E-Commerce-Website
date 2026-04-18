
import React from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { asyncsetproduct } from '../../store/ProductAction';

const CreateProduct = () => {

const { register, handleSubmit, reset} = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const submithandler = (product)=>{
      product.id = nanoid();
      toast.success("Product Created");
      dispatch(asyncsetproduct(product));
      navigate('/products');
      reset();
    }
  
    return (
      <div className="min-h-full p-6 md:p-10 bg-slate-50 text-slate-800 flex justify-center w-full">
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create New Product</h1>
            <p className="text-slate-500 mt-2 text-sm font-medium">Add a new item to your store inventory by filling out the details below.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <form onSubmit={handleSubmit(submithandler)} className="p-8 flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Title */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="title">Product Title</label>
                  <input 
                    id="title"
                    type="text" 
                    placeholder="e.g. Wireless Noise-Canceling Headphones"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-slate-900 font-medium placeholder-slate-400"
                    {...register("title")}
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="category">Category</label>
                  <input 
                    id="category"
                    type="text" 
                    placeholder="e.g. Electronics"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-slate-900 font-medium placeholder-slate-400"
                    {...register("category")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Price */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="price">Price</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 font-medium">$</div>
                    <input 
                      id="price"
                      type="number" 
                      step="0.01"
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-slate-900 font-medium placeholder-slate-400"
                      {...register("price")}
                    />
                  </div>
                </div>

                {/* Img URL */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700" htmlFor="img">Image URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                    </div>
                    <input 
                      id="img"
                      type="url" 
                      placeholder="https://example.com/image.jpg"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-slate-900 font-medium placeholder-slate-400"
                      {...register("img")}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700" htmlFor="description">Product Description</label>
                <textarea 
                  id="description"
                  placeholder="Describe the product details, features, etc." 
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-y text-slate-900 font-medium placeholder-slate-400"
                  {...register("description")}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6 mt-2 border-t border-slate-100">
                <button 
                  type="submit"
                  className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5 transform transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
  

export default CreateProduct;