
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const ProductDetails = () => {
    const [Quantity, setQuantity] = useState(0);
    const [Addedcart,setAddedcart] = useState(0);
    const param = useParams()
    console.log(param.id);
    const Products = useSelector((state) => state.productReducer.Products)
    const Product = Products.find(p => p.id ==param.id)
    console.log(Product);
    
      if (!Product) {
    return <div>Loading...</div>;
  }

  const increment = () => {
    setQuantity(Quantity + 1);
  };

  const decrement = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 1);
    }
  }

  const fill_heart = ()=>{
    if(Addedcart == 0){
      setAddedcart(1);
    }
    else{
      setAddedcart(0);
    }
  }
  
  return (
    <>
    <div className='text-black flex gap-8 w-full h-auto p-4'>
        <div className='Left text-black w-1/2 h-1/2'>
         <img 
            src={Product.img}
            alt={Product.title}
            className='w-full h-full object-cover p-1 rounded-xl'
          />
        </div>

        <div className='Right w-1/2 h-auto p-3 flex flex-col gap-10  bg-slate-200 rounded'>
            <h1 className='text-5xl font-thin'>{Product.title}</h1>
            <div>
              <small className='opacity-50'>DESCRIPTION</small>
              <p>{Product.description}</p>
            </div>

            <div>
              <small className='opacity-90 text-lg font-thin'>Price:</small>
              <h1 className='text-xl'>Rs. {Product.price}</h1>
            </div>

            <div>
              <small className='opacity-90 text-lg font-thin'>Quantity</small>
              <div className='flex w-1/4 rounded-x'>
                <div className='display w-[70%] h-10 bg-slate-50 flex items-center justify-center '>{Quantity}</div>
                <div className='buttons w-[30%] h-10 flex flex-col p-0.5 bg-gray-400'>
                  <button onClick={increment} className='Plus_button w-full h-1/2 border-b-2 border-white flex items-center justify-center'>+</button>
                  <button onClick={decrement} className='Minus_button w-full h-1/2 flex items-center justify-center'>-</button>
                </div>
              </div>
            </div>

            <div className='flex gap-3'>
              <button onClick={fill_heart} className='AddCart w-1/2 h-10 p-2 rounded bg-black text-white'>Add to Cart</button>
              <div className='w-[8%] h-10 border border-black rounded flex items-center justify-center'>
                <p className='heart text-4xl font-thin'>{Addedcart > 0 ? "♥" : "♡"}</p>
              </div>
            </div>
            
        </div>
    </div>
    
    </>
    
  )
}

export default ProductDetails;