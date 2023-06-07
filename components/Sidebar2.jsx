import Link from 'next/link';
import React from 'react';

const Sidebar2 = () => {
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
    <div className="flex items-center justify-center  bg-zinc-600 invisible half:visible ">
      <div className="flex p-2 half:space-x-4">
        {categories.map((category) => (
          <Link key={category.name} href={{ pathname: category.link, query: { category: category.name } }}>
            <p className="text-sm text-white  hover:text-gray-900 cursor-pointer half:text-lg">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar2;
