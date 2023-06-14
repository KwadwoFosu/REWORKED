import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import { TfiMenu } from 'react-icons/tfi';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import SearchInput from './Searchinput';
import Sidebar1 from './Sidebar1';
import Loginmenu from './Loginmenu';
import { BiSearch } from 'react-icons/bi';
import Sidebar2 from './Sidebar2';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  }
  return (

    <div className='items-center rounded-lg flex-col'>
      <div className='bg-zinc-900 flex items-center justify-between p-3  text-white'>
        <p className='flex items-center'>
          <TfiMenu className='mx-2 half:hidden' onClick={handleButtonClick} />
          {isOpen && (
            <div className="relative">
              <div   className="fixed top-0 left-0 z-20 w-full h-full bg-slate-900 opacity-90" onClick={handleClose}>
                 <div className='fixed top-0 left-0 z-30 w-64 h-full bg-white shadow'>
              <Sidebar1 onClose={handleClose} />
            </div>
              </div>
              </div>
           
          )}
          <Link href='/' className='font-bold text-lg text-white '>
            NUTORLA
          </Link>
        </p>
        <div className='invisible w-max half:visible'>
        <SearchInput />
        </div>
        
        <div className='flex'>
        <button className='mx-3 text-gray-400 visible half:invisible' onClick={toggleSearchVisibility}><BiSearch  size= {20}/></button>
          <button type='button' className='cart-icon ' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
         

          <button type='button' className='cart-icon z-50 '>
            <Loginmenu />
          </button>

          {showCart && <Cart />}
        </div>
      </div>
      <div className='md:hidden items-center mx-10 drop-shadow'>
        {isSearchVisible && <SearchInput />}
        
      </div>
      <Sidebar2 />
    </div>
  );
};

export default Navbar;
