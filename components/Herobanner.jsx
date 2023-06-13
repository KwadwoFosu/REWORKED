/*
/* eslint no-use-before-define: 0 */  // --> OFF

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import 'swiper/swiper-bundle.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

SwiperCore.use([Navigation,Autoplay]);

const Herobanner = ({ herobanner }) => {
  const [swiper, setSwiper] = useState(null);
  const [autoplayEnded, setAutoplayEnded] = useState(false);


  const handleSlideChange = () => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
      setAutoplayEnded(false);
    }
  };

  const handleAutoplayEnd = () => {
    setAutoplayEnded(true);
  };

  const autoplayConfig = {
    delay: 9000,
    disableOnInteraction: false,
  };
  return (
    <div className=' bg-blue-50'>
      <Swiper
        className='bg-white'
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        onAutoplay={handleAutoplayEnd}
        autoplay={autoplayConfig}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {herobanner.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div>
              <img
                src={urlFor(banner.image).url()}
                alt='sneakers'
                layout ='responsive'               
                style={{ objectFit: 'contain'}}
               className=' h-[500px]  w-full    '
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          className='absolute top-1/2 right-0 z-10 w-16 h-16 text-3xl text-white cursor-pointer swiper-button-next'
        >
          &#10095;
        </div>
        <div
          className='absolute top-1/2 left-0 z-10 w-16 h-16 text-3xl text-white cursor-pointer swiper-button-prev'
        >
          &#10094;
        </div>
      </Swiper>
      
      
    </div>
  );
};

export default Herobanner;
