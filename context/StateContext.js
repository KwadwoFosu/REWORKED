
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [cont, setCont] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('GHC');
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const clearCart = () => {
    setCartItems([]); // Clear the cart items by setting an empty array
    setTotalPrice(0); // Reset the total price to zero
    setTotalQuantities(0); // Reset the total quantities to zero
  };
  
  const calculatePriceInCurrency = ( price,currency) =>{
    // Perform any necessary calculations or conversions based on the currency here
    // For simplicity, let's assume the conversion rates are already available
    if (currency === 'EUR') {
      return (price * 0.089).toFixed(2); // Assuming EUR is a predefined conversion rate
    } else if (currency === 'GBP') {
      return (price * 0.2).toFixed(2); // Assuming GBP is a predefined conversion rate
    }
    else if (currency === 'GHC') {
      return (price * 1).toFixed(2); // Assuming GBP is a predefined conversion rate
    }
    else if (currency === 'USD') {
      return (price * 0.088).toFixed(2); // Assuming GBP is a predefined conversion rate
    }
    else {
      return price; // Return the original price if no matching currency is found
    }
  }
  const calculatePriceInGHCCurrency = ( price,currency) =>{
    // Perform any necessary calculations or conversions based on the currency here
    // For simplicity, let's assume the conversion rates are already available
    if (currency === 'EUR') {
      return price/0.08; // Assuming EUR is a predefined conversion rate
    } else if (currency === 'GBP') {
      return price/0.2; // Assuming GBP is a predefined conversion rate
    }
    else if (currency === 'GHC') {
      return price/1; // Assuming GBP is a predefined conversion rate
    } 
    else if (currency === 'USD') {
      return price/0.088; // Assuming GBP is a predefined conversion rate
    } 
    else {
      return price; // Return the original price if no matching currency is found
    }
  }
  let foundProduct;
  let index;
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);

      // Calculate total price and total quantities
      let totalPrice = 0;
      let totalQuantities = 0;
      parsedCartItems.forEach((item) => {
        totalPrice += item.price * item.quantity;
        totalQuantities += item.quantity;
      });

      setTotalPrice(totalPrice);
      setTotalQuantities(totalQuantities);
    }
  }, []);
  
    

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const onAdd = (product, quantity,size,color,selectedCurrency) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            size:size,
            color:color,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product,color:color, size:size}]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product,selectedCurrency) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };
 




  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  } 
  

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities ,
        cont,
        setCont,
        clearCart,
        selectedCurrency,
        setSelectedCurrency,
        handleCurrencyChange,
        calculatePriceInCurrency,
        calculatePriceInGHCCurrency,
      
        
        
        
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);