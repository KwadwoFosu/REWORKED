import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = ({ imageUrl, name }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-25 text-center w-[300px] text-white bg-neutral-500 opacity-80 p-4">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover mx-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 text-wrap tracking-[1px] text-white">
          {name}
        </h3>
        <p className="text-sm text-white mt-2">Freelancer</p>
        <p className="text-lg pt-3">
          Social media can also be used to share interesting facts, true
          stories, and other important information
        </p>
        <div className="flex text-black bg-white rounded-xl p-2 justify-center gap-2 mt-2 mx-4">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
