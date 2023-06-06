import React from 'react';
import { Product } from '../../components';
import { client } from '../../lib/client';
import Sidebar2 from '../../components/Sidebar2';


const Index = ({ products ,category}) => {
  return (
    <div className='flex flex-col '>
            
        <div className='products-heading bg-zinc-900'>
        <h2 className='font-sans font-semibold'>{category}</h2>
      
      </div>
      <div className='products-container mx-3 justify-center'>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
     
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;
 const category = query.category || 'Hot Deals';

  const catquery = `*[_type == "product" && category == $category]`;
  const products = await client.fetch(catquery, { category });

  return {
    props: {
      products,
      category,
    },
  };
};

export default Index;
