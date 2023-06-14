import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';

const Filter = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleApplyFilters = async () => {
    let query = `*[_type == "product"`;
  
    if (selectedCategory || selectedColor || selectedSize) {
      query += ` && (`;
  
      if (selectedCategory) {
        query += `category == "${selectedCategory}"`;
      }
  
      if (selectedColor) {
        query = selectedCategory ? ` && color == "${selectedColor}"` : `color == "${selectedColor}"`;
      }
  
      if (selectedSize) {
        query += (selectedCategory || selectedColor) ? ` && size == "${selectedSize}"` : `size == "${selectedSize}"`;
      }
  
      query += `)`;
    }
  
    query += `]`;
  
    try {
      const products = await client.fetch(query);
      const selectedFilters = [selectedCategory, selectedColor, selectedSize]
        .filter(value => value) // Filter out empty values
        .join(' ');
  
      router.push({
        pathname: '/search',
        query: {
          q: selectedFilters,
        },
      });
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };
  
  

  return (
    <div>
      <div className="flex flex-col half:flex-row justify-between items-center px-3 py-2 bg-slate-50">
        {/* Category filter */}
        <div className="w-1/2 half:w-1/4">
          <label htmlFor="category" className="font-semibold">
            Price:
          </label>
          <select
            id="price"
            className="block w-full mt-1"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Price</option>
            <option value="500">500</option>
            <option value="300">300</option>
            {/* Add more category options */}
          </select>
          <button className="px-4 py-2 text-white bg-zinc-500" onClick={handleApplyFilters}>
          Apply Filter
        </button>
        </div>
        <div className="w-1/2 half:w-1/4">
          <label htmlFor="category" className="font-semibold">
            Color:
          </label>
          <select
            id="price"
            className="block w-full mt-1"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            {/* Add more category options */}
          </select>
          <button className="px-4 py-2 text-white bg-zinc-500" onClick={handleApplyFilters}>
          Apply Filter
        </button>
        </div>

      
        <div className="w-1/2 half:w-1/4">
          <label htmlFor="category" className="font-semibold">
            Size:
          </label>
          <select
            id="size"
            className="block w-full mt-1"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Sizes</option>
            <option value="xx">small</option>
            <option value="xl">large</option>
            {/* Add more category options */}
          </select>
          <button className="px-4 py-2 text-white bg-zinc-500" onClick={handleApplyFilters}>
          Apply Filter
        </button>
        </div>

        {/* Apply button */}
       
      </div>
    </div>
  );
};

export default Filter;
