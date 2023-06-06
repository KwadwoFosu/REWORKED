import React from 'react';

const ImageCard = ({ imageUrl,name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-max ">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Product"
          className="w-full h-80 object-cover"
        />
     
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-wrap">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">
        
        </p>
       
      </div>
    </div>
  );
};

export default ImageCard;
