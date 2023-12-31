import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext';
import { useCurrencyContext} from '../context/currencyContext';

const Product = ({product }) => {
  
  const { currencyRates } = useCurrencyContext();
  const { selectedCurrency} = useStateContext();
  const calculatePriceInCurrency1 = ( price,currency) =>{
    // Perform any necessary calculations or conversions based on the currency here
    // For simplicity, let's assume the conversion rates are already available
    if (currency === 'EUR') {
      return ((price+120) * currencyRates.Euro).toFixed(); // Assuming EUR is a predefined conversion rate
    } else if (currency === 'USD') {
      return ((price+120) * currencyRates.USD).toFixed(); // Assuming GBP is a predefined conversion rate
    }
    else if (currency === 'GHC') {
      return (price * 1).toFixed(); // Assuming GBP is a predefined conversion rate
    }
    else if (currency === 'GBP') {
      return ((price+120) * currencyRates.GBP).toFixed(); // Assuming GBP is a predefined conversion rate
    }
    else {
      return price; // Return the original price if no matching currency is found
    }
  }
  const priceInSelectedCurrency = calculatePriceInCurrency1(
    product.price,
    selectedCurrency);
  
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
          <span className="text-gray-800 font-bold"> {selectedCurrency} {priceInSelectedCurrency}</span> 
         <div className='flex flex-col'>
          
          
          </div>
          
        </div>
      </div>
    </div>


  

  )
}


export default Product 
