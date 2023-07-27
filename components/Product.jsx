import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext';

const Product = ({product  }) => {
  const { qty, onAdd} = useStateContext();
  
  return (
<div className="bg-white shadow-lg rounded-lg overflow-hidden h-25">
     
      <div className="relative">
          <Link  href= {`/product/${product.slug.current}`}>  <img
          src={urlFor(product.image && product.image[0])}
          alt="Product"
          className="w-full h-80 object-cover"
        />
        </Link> 
        
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-wrap font-gen tracking-[2px] ">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">
        
        </p>
       
        <div className="flex items-center justify-between mt-4 font-gen">
          <span className="text-gray-800 font-bold">GHC {product.price}</span> 

          
        </div>
      </div>
    </div>


  

  )
}

export default Product 
