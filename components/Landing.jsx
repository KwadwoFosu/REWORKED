import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

const Landing = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    '/Nutorla.jpg',
    '/13.jpg',
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(src);
      });
    };

    const preloadImages = async () => {
      const loadedImages = await Promise.all(backgrounds.map((src) => loadImage(src)));
      setLoadedImages(loadedImages);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  const backgroundClass = classNames('bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center border-2', {
    'bg-[url(/Nutorla.jpg)]': bgIndex === 0,
    'bg-[url(/13.jpg)]': bgIndex === 1,
  });

  return (
    <div className={backgroundClass} style={{ backgroundPosition: 'center top' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="text-center">
          <h1 className="text-[50px] font-bold mb-4 text-zinc-900 font-eric  p-3">This is Nutorla</h1>
          <Link href= '/Customize'><button className="mt-4 bg-zinc-900 border-2 border-black  text-white font-bold py-2 px-6 rounded-3xl font-eric">
            Shop Now
          </button></Link>
        </div>
      )}
    </div>
  );
};

export default Landing;