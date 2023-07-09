import React from 'react'
import { client } from '../lib/client'
import Landing from '../components/Landing'
import ImageCard from '../components/ImageCard'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({ bannerData } ) => {
  return (
    <div >
      < Landing />
      <div className='mt-[70px]  '>
      {/* <div className='text-white font-semibold text-[25px] justify-center bg-zinc-900  '>
        <h2 className='font-sans '>GALLERY</h2>
        
      </div>*/}
       <div className='products-container mx-3 justify-center p-3 font-gen'   >
      <div>
      <ImageCard imageUrl= '/IMG_0173.jpg' name= "Pants Alesa" /></div>
      <div><ImageCard imageUrl= '/12.jpg' name="Shop The Look " /></div>
      <div><ImageCard imageUrl= '/13.jpg'  name= "Plus-one Perfection"/></div>
      <div><ImageCard imageUrl= '/IMG_0258.jpg'  name= "A Girl's Perfect Pick"/></div>
      
      </div>
    {/*  <div className="flex flex-row gap-2">
        <div className=" flex-1 items-center w-full h-[500px] mb-10 sm:w-1/2 half: h-[500px]    "><Herobanner herobanner = { bannerData} /></div> 
  
    </div> */}
          </div>
          <br/>
          <br/>
       
    </div>
  )
}
//create sanity query
export const getServerSideProps = async () => {
  const bannerquery = '*[_type== "banner" ]';
 const bannerData = await client.fetch(bannerquery);

 return {
   props: {
     bannerData,
     
    }
   }
}

export default index
