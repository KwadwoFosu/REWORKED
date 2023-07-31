import React from 'react'
import { client } from '../lib/client'
import Landing from '../components/Landing'
import ImageCard from '../components/ImageCard'
import Testimonial from '../components/Testimonial'
//if banner data is available ln7 then parse the first element as a prop to herobanner instead

//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({ bannerData } ) => {
  return (
    <div >
      < Landing />
      <div className='mt-[70px]  '>
       <div className='products-container mx-3 justify-center p-3 '   >
      
       <div><ImageCard imageUrl= '/IMG_0173.jpg' name= "Pants Alesa" /></div>
      <div><ImageCard imageUrl= '/12.jpg' name="Shop The Look " /></div>
      <div><ImageCard imageUrl= '/13.jpg'  name= "Plus-one Perfection"/></div>
      <div><ImageCard imageUrl= '/IMG_0258.jpg'  name= "A Girl's Perfect Pick"/></div>
      
      </div>

      
      <div className='products-container mx-3 justify-center p-3 bg-[url(/IMG_0173.jpg)]  no-repeat'   >
      
      <div><Testimonial imageUrl= '/IMG_0173.jpg' name= "Pants Alesa" /></div>
     <div><Testimonial imageUrl= '/12.jpg' name="Shop The Look " /></div>
     <div><Testimonial imageUrl= '/13.jpg'  name= "Plus-one Perfection"/></div>
     <div><Testimonial imageUrl= '/IMG_0258.jpg'  name= "A Girl's Perfect Pick"/></div>
     
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
