import React, { useEffect, useState } from 'react';
import { Popover } from '@headlessui/react';
import { BiMoneyWithdraw } from 'react-icons/bi';

const Currency = () => {
 

  return (
    <Popover className='mx-2'>
    {({ open }) => (
      <>
        <Popover.Button>
          <BiMoneyWithdraw  className="text-xl text-gray-400 cursor-pointer" size={25}/>
        </Popover.Button>
        <Popover.Panel
          className={`${
            open ? 'block' : 'hidden'
          } z-50 absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <>
              <a
                
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                GHC
              </a>
              <a
                
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                USD
              </a>
              <a
                
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                GBP
              </a>
              <a
                
                className="block px-4 py-1 text-sm text-gray-700 hover:bg-orange-200 hover:text-gray-900"
                role="menuitem"
              >
                EURO
              </a>
             
            </>
          </div>
        </Popover.Panel>
      </>
    )}
  </Popover>
 
  );
};

export default Currency;
