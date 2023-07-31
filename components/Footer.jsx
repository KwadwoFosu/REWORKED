import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp,  } from 'react-icons/ai';
import { FaSnapchat } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-zinc-900 py-4 ">
      <div className="container mx-auto flex flex-col half:flex-row justify-between cursor-ponter items-center text-white text-lg">
      
        <Link href ="/Information"><div className='block py-2 text-orange-500 hover:text-orange-700 cursor-pointer font-gen tracking-[2px]'>About Nutorla</div></Link>
        <Link href = "/Return "><div className='block py-2 text-orange-500 hover:text-orange-700 cursor-pointer font-gen tracking-[2px]'>Returns Information</div></Link>
        

        
        <div className="flex justify-center md:justify-end m-4 md:mt-0 ">
          <a
            href="https://www.snapchat.com/add/eyaotsey?share_id=kJElgGSgQPmJYvL3jgvrLQ&locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className='m-2'
            
          >
            <FaSnapchat size={30} className='text-yellow-500' />
          </a>
          <a
            href="https://wa.me/message/BROZ2ECEMXJVM1"
            target="_blank"
            rel="noopener noreferrer"
            className='m-2'
            
          >
            <AiOutlineWhatsApp size={30} className='text-green-500' />
          </a>
          <a
            href="https://www.facebook.com/nutorla?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className='m-2'
            
          >
           < AiFillFacebook size ={30} className='text-blue-500'/>
          </a>
          <a
            href="https://instagram.com/nutorla?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className='m-2'
        
          >
           < AiFillInstagram size ={30} className='text-pink-500'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
