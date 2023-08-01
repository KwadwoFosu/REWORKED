import React from 'react'
import { useState } from 'react'
import { Herobanner, Product,Sidebar } from '../../components/index'
import { client } from '../../lib/client'
import Currency from '../../components/Currency'
import { useStateContext } from '../../context/StateContext'

//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products} ) => {
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  const handleClose = () => {
    setShowFilter(false);
  };
  const {selectedCurrency} = useStateContext;

  
  
  return (
    <div >
    
        
     <div className='bg-slate-50'>
      <div className='bg-zinc-900 flex flex-row justify-between text-white font-semibold text-[25px]    '>
        <h2 className='font-gen tracking-[2px]'>Products</h2>
        <Currency />
      </div>

      
        <div >
      
         <div className='products-container mx-3 justify-center'>
          {products.map((product) => <Product  key =
          {product._id} product = {product} 
          selectedCurrency= {selectedCurrency} 
          />)}
          </div>
       </div>
       <br/>
       <br/>
       <br/>
       </div>
       
    </div>
  )
} 
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ]';
 const products = await client.fetch(query);
 const queryhot = '*[_type== "product" && category == "Hot Deals" ]';
 const productshot = await client.fetch(queryhot);
 const querypants = '*[_type== "product" && category == "Pants" ]';
 const productspants = await client.fetch(querypants);
 const queryjump = '*[_type== "product" && category == "Jumpsuits" ]';
 const productsjump = await client.fetch(queryjump);
 const queryblouses = '*[_type== "product" && category == "Blouses" ]';
 const productsblouses = await client.fetch(queryblouses);
 const queryskirts = '*[_type== "product" && category == "Skirts" ]';
 const productsskirts = await client.fetch(queryskirts);
 const querytwopieces = '*[_type== "product" && category == "Two pieces" ]';
 const productstwopieces = await client.fetch(querytwopieces);
 const querydresses = '*[_type== "product" && category == "Dresses" ]';
 const productsdresses = await client.fetch(querydresses);
 const queryblazers = '*[_type== "product" && category == "Blazers" ]';
 const productsblazers = await client.fetch(queryblazers);
 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);
 const ratequery = '*[_type== "rate" ]';
 const rate = await client.fetch(ratequery);
 const { Euro, GBP, USD } = rate[0];
 return {
   props: {
     products,
     bannerData,
     productshot,
     productspants,
     productsjump,
     productsblouses,
     productsskirts,
     productstwopieces,
     productsdresses,
     productsblazers,
     rate,
     Euro,
      GBP,
      USD,
    }
   }
}

export default index