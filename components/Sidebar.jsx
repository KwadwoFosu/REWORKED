import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  const categories = [
    { name: 'Pants', link: '/categories/' },
    { name: 'Jumpsuits', link: '/categories/' },
    { name: 'Blouses', link: '/categories/' },
    { name: 'Skirts', link: '/categories/' },
    { name: 'Two pieces', link: '/categories/' },
    { name: 'Dresses', link: '/categories/' },
    { name: 'Blazers', link: '/categories/' },
    
  ];

  return (
    <div className='items-centers'>
      <p className='font-semibold px-5'>Categories</p>

      {categories.map((category) => (
        <Link key={category.name} href={{ pathname: category.link, query: { category: category.name } }}>
          <p className='px-5 m-3 cursor-pointer rounded-xl hover:bg-orange-300 font-gen'>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
