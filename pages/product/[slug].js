import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { BiCircle } from 'react-icons/bi';

const ProductDetails = ({ product, products }) => {
  const { image, name, description, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };


  const sizeOptions = ['Size 10 Bust:36 Waist: 29 Hip:40','Size 12 Bust:38 Waist:31 Hip:42','Size 14 Bust:40 Waist:34 Hip:45','Size 16 Bust:42 Waist:38 Hip:48']; // Replace with your actual size options
  const colorOptions = [
    { name: 'Jet Black', hex: '#000000' },
    { name: 'Brilliant White', hex: '#FFFFFF' },
    { name: 'Tomato Red', hex: '#de1010' },
    { name: 'Pink', hex: '#ed1f9e' },
    { name: 'Lilac', hex: '#d86fed' },
    { name: 'Royal Blue', hex: '#1a1ae8' },
    { name: 'Mustard', hex: '#bf991b' },
    { name: 'Olive Green', hex: '#1b6636' },
    { name: 'Mocha', hex: '#8B7355' },
    { name: 'Burnt Orange', hex: '#f56b1b' },
  ];
  
  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[index])} alt='a' className='h-75' />
          </div>
          <div className='small-images-container flex-wrap'>
            {image?.map((item, i) => (
              <img
                alt='a'
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='product-detail-desc'>
          <h1 className='text-[20px] font-bold half:text-[50px]'>{name}</h1>
          <h4 className='font-semibold text-lg'>Details</h4>
          <p>{description}</p>
          <p className='price'>GHC {price}</p>
          <div></div>
          <div className='quantity'>
            <h3>Quantity:</h3>
            <p className='quantity-desc flex items-center'>
              <span className='minus' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className='num'>{qty}</span>
              <span className='plus' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='size'>
            <label htmlFor='size' className='block font-medium mb-1'>
              Size:
            </label>
            <select
              id='size'
              className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500'
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value=''>Select Size</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            
          </div >
          <div className='color'>
            <label htmlFor='color' className='block font-medium mb-1'>
              Color:
            </label>
           <select
  id='color'
  className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-orange-500'
  value={selectedColor}
  onChange={handleColorChange}
>
  <option value=''>Select Color</option>
  {colorOptions.map((color) => (
    <option key={color.name} value={color.name}>
      <div className=' flex items-center'>
        <div className='color-name text-sm'>{color.name}
        </div>
        
      </div>
    </option>
  ))}
</select>
          
            
          </div>
          <div className='buttons'>
            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty,selectedSize, selectedColor)}>
              Add to Cart
            </button>
            {/* <button type = 'button' 
                            className='buy-now' onClick=''>Buy Now</button>*/}

        
          </div>
          <br/>
          <br/>
         
        </div>
      </div>
      <p>Color Guide</p>
          <img src='/Colorchat1.png' width= {600}></img>
      <div className='maylike-products-wrapper'>
        <h2>Recommended Items</h2>
        <div className='marquee'>
          <div className='maylike-products-container track'>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
};
// include get static paths
// getstatic props is used here
export const getStaticPaths = async () => {
    const query =  `*[_type == "product"] {
     slug {
        current
     }   
    }`
 const products =await client.fetch(query)

 const paths = products.map((product) => ({
    params: {
        slug: product.slug.current
    }
 }))
 return {
    paths,
    fallback: 'blocking'
 }
}
export const getStaticProps = async ({ params: {slug}}) => {
    const query = `*[_type== "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
   
    
   
    return {
      props: {
        products,
        product
       }
      }
    }

export default ProductDetails
