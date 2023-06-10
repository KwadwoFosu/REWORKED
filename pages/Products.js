import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function Products() {
    const router = useRouter();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Retrieve the "products" query parameter from the URL
      const { products: productsQueryParam } = router.query;
      
      if (productsQueryParam) {
        setProducts(productsQueryParam);
      }
    }, [router.query]);
  
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  