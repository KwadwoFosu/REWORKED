import React from 'react'
import { useState,useEffect } from 'react'
import { client } from '../lib/client'
import Landing from '../components/Landing'
import ImageCard from '../components/ImageCard'
import Testimonial from '../components/Testimonial'
import { useCurrencyContext } from '../context/currencyContext'


//import { useUser } from '@auth0/nextjs-auth0/client';
const index = ({ bannerData,Euro,USD,GBP } ) => {
  const { setRates } = useCurrencyContext();

  // Set currency rates in the context
  useEffect(() => {
    setRates({ Euro, GBP, USD });
  }, [Euro, GBP, USD]);
  const testimonialsData = [
    { imageUrl: '/IMG_0173.jpg', name: 'Sarah Dyan', quote: "Hey I'm Sarah Dyan" },
    { imageUrl: '/12.jpg', name: 'Jasmine Alesa',quote: "Hey I'm Jasmine Alesa" },
    { imageUrl: '/13.jpg', name: 'Chrisitne Mills', quote: "Hey I'm Christine"},
    { imageUrl: '/IMG_0258.jpg', name: "Clara Mimie", quote: "Hey I'm Clara Mimie" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 45000); 

    return () => clearInterval(interval);
  }, []);
  
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

      {/*<div className="products-container mx-auto w-[400px] justify-center p-3 bg-[url(/IMG_0173.jpg)]">
  {testimonialsData.map((testimonial, index) => (
    <div
      key={index}
      className={`${
        currentIndex === index
          ? 'animate-fade-in-out opacity-100'
          : 'hidden'
      }`}
    >
      <Testimonial imageUrl={testimonial.imageUrl} name={testimonial.name} quote = {testimonial.quote} />
    </div>
  ))}
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
 const ratequery = '*[_type== "rate" ]';
 const rate = await client.fetch(ratequery);
 const { Euro, GBP, USD } = rate[0];
 return {
   props: {
     bannerData,
     rate,
     Euro,
      GBP,
      USD,
    }
   }
}

export default index
