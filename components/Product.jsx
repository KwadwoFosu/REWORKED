import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext';
const Product = ({product  }) => {
  const { qty, onAdd} = useStateContext();
  return (
<div className="bg-white shadow-lg rounded-lg overflow-hidden w-max">
     
      <div className="relative">
          <Link  href= {`/product/${product.slug.current}`}>  <img
          src={urlFor(product.image && product.image[0])}
          alt="Product"
          className="w-full h-80 object-cover"
        />
        </Link> 
        {/* <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full">
          <span className="text-gray-800 font-semibold"></span>
        </div>*/}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-wrap">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">
        
        </p>
       
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-800 font-bold">GHC {product.price}</span>
          
        </div>
      </div>
    </div>


  

  )
}

export default Product  

{/* <div className='flex flex-row items-center bg-zinc-200 mb-2 ml-3 rounded-xl shadow-xl sm:flex-col  phone: w-[340px] '>
<Link href= {`/product/${product.slug.current}`}>
          <div className= "product-card">
              <img src={urlFor(product.image && product.image[0])} 
              
              className='product-image w-[200px] h-[200px] p-3'/>
              
          </div>
          
  </Link>
              <div className='flex-col px-3'>
               <div>
              <Link   href= {`/product/${product.slug.current}`} >
                  <p className='product-name'>{product.name}</p>
              </Link>
              <p className='product-price'>GHC  {product.price}</p>
              </div>
                  <div className='buttons flex'>
                 
                      <button type = 'button' 
                      className='p-2 text-white bg-blue-700 rounded boder-none mt-4' onClick= {() => onAdd (product, qty)}>Add to cart </button>
                     
                  </div>
                  </div>
</div> */}