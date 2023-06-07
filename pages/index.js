import React from 'react'
import { Herobanner, Product,Sidebar } from '../components/index'
import { client } from '../lib/client'
import { BsTelephoneInbound,BsFillArrowRightCircleFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaRegHandshake } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Landing from '../components/Landing'
import Sidebar2 from '../components/Sidebar2'
import ImageCard from '../components/ImageCard'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({products, bannerData , productshot,productspants,productsjump, productsblouses,productsskirts, productstwopieces,productsdresses,productsblazers} ) => {

 
 


  return (
    <div >
      < Landing />
      <div className='bg-slate-50 mt-[70px]  '>
      <div className='text-white font-semibold text-[25px] justify-center bg-zinc-900  '>
        <h2 className='font-sans '>GALLERY</h2>
        
      </div>
       <div className='products-container mx-3 justify-center p-3'   >
      <div>
      <ImageCard imageUrl= '/11.jpg' name= "Turn Up in These" /></div>
      <div><ImageCard imageUrl= '/12.jpg' name="Shop The Brand " /></div>
      <div><ImageCard imageUrl= '/13.jpg'  name= "Plus-one Perfection"/></div>
      
    
              
              
      </div>
      <div className="flex flex-row gap-2">
        <div className=" flex-1 items-center w-full h-[500px] mb-10 sm:w-1/2 half: h-[500px]    "><Herobanner herobanner = { bannerData} /></div> 
  
  </div>
          </div>
       
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
 const query = '*[_type== "product" ][0..5]';
 const products = await client.fetch(query);
 const queryhot = '*[_type== "product" && category == "Hot Deals" ]';
 const productshot = await client.fetch(queryhot);
 const querypants = '*[_type== "product" && category == "Pants" ][0..1]';
 const productspants = await client.fetch(querypants);
 const queryjump = '*[_type== "product" && category == "Jumpsuits" ][0..1]';
 const productsjump = await client.fetch(queryjump);
 const queryblouses = '*[_type== "product" && category == "Blouses" ][0..1]';
 const productsblouses = await client.fetch(queryblouses);
 const queryskirts = '*[_type== "product" && category == "Skirts" ][0..1]';
 const productsskirts = await client.fetch(queryskirts);
 const querytwopieces = '*[_type== "product" && category == "Two pieces" ][0..1]';
 const productstwopieces = await client.fetch(querytwopieces);
 const querydresses = '*[_type== "product" && category == "Dresses" ][0..1]';
 const productsdresses = await client.fetch(querydresses);
 const queryblazers = '*[_type== "product" && category == "Blazers" ][0..1]';
 const productsblazers = await client.fetch(queryblazers);
 const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

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
    }
   }
}

export default index
