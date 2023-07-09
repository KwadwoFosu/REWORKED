import React from 'react';
import Image from 'next/image';
const ImageCard = ({ imageUrl,name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-25 ">
      <div className="relative">
        <Image
          src={imageUrl}
          alt="Product"
          className="w-full h-80 object-cover"
        />
     
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-wrap font-gen tracking-[2px]">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">
        
        </p>
       
      </div>
    </div>
  );
};

export default ImageCard;
