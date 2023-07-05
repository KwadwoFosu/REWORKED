import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillInstagram, AiOutlineWhatsApp,AiFillFacebook} from 'react-icons/ai';
import { FaSnapchat} from 'react-icons/fa';
import { useState } from 'react';

const Sidebar1 = ({ onClose }) => {
  const categories = [
    { name: 'Pants', link: '/categories/' },
    { name: 'Jumpsuits', link: '/categories/' },
    { name: 'Blouses', link: '/categories/' },
    { name: 'Skirts', link: '/categories/' },
    { name: 'Two pieces', link: '/categories/' },
    { name: 'Dresses', link: '/categories/' },
    { name: 'Blazers', link: '/categories/' },
    { name: 'Pouch(Coming Soon)', link: '' },
  ];


  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-gray-200 shadow-2xl">
      <div className="flex items-center justify-between p-4">
        <h2 className="font-bold text-lg text-gray-800">Categories</h2>
        <AiOutlineClose onClick={onClose} className="cursor-pointer text-gray-600" />
      </div>
      <div className="py-3">
        {categories.map((category, index) => (
          <Link
            onClick={onClose}
            key={category.name}
            href={{
              pathname: category.link,
              query: { category: category.name },
            }}
          >
            <p
              className={`px-4 py-2 m-2 cursor-pointer rounded-lg hover:bg-orange-400 text-gray-800 ${
                index === categories.length - 1 ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              {category.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="bg-white flex justify-between p-2 m-2">
        <div><Link href= 'https://instagram.com/nutorla?igshid=NTc4MTIwNjQ2YQ=='><AiFillInstagram size={30} className='text-pink-600' /></Link></div>
        <div><Link href= "https://www.snapchat.com/add/eyaotsey?share_id=kJElgGSgQPmJYvL3jgvrLQ&locale=en_US"><FaSnapchat size={30} className='text-yellow-500' /></Link></div>
        <div><Link href = "https://wa.me/message/BROZ2ECEMXJVM1"><AiOutlineWhatsApp size={30} className='text-green-500' /></Link></div>
        <div><Link href= "https://www.facebook.com/nutorla?mibextid=LQQJ4d">< AiFillFacebook size ={30} className='text-blue-500'/></Link></div>
      </div>
      <div className="p-4 m-4">
        <Link href='/Information'>
      <div
        className="block py-2 text-blue-500 hover:text-orange-700 cursor-pointer"
        
      >
        Help & Information
      </div></Link>
      
      <Link href='/Information'><div
        className="block py-2 text-blue-500 hover:text-orange-700 cursor-pointer"
        
      >
        About Nutorla
      </div></Link>
      <Link href = "/Information">
      <div
        className="block py-2 text-blue-500 hover:text-orange-700 cursor-pointer"
        
      >
        Address
      </div></Link>
      <Link href= "/Information">
      <div
        className="block py-2 text-blue-500 hover:text-orange-700 cursor-pointer"
        
      >
        Returns Information
      </div></Link>

      
        
      
    </div>
    </div>
  );
};

export default Sidebar1;
