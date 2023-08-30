/* eslint no-use-before-define: 0 */  // --> OFF
import React, {useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useStateContext } from '../context/StateContext';
import { urlFor, client } from '../lib/client';
import { usePaystackPayment } from 'react-paystack';
import { useRouter} from 'next/router';
import { useCurrencyContext } from '../context/currencyContext';



const Cartlogin = () => {
  
  const { currencyRates } = useCurrencyContext();

  const cartRef = useRef();
  const { user } = useUser();
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
 

const handleClick = () => {
  setShowForm(true);
};
const handleClose = () => {
  setShowForm(false);
}


    const { totalPrice, totalQuantities, cartItems,setShowCart,toggleCartItemQuantity, onRemove,clearCart,selectedCurrency} = useStateContext();
    
  
     
    const [shippingDetails, setShippingDetails] = useState({
      Name: '',
      Address: '',
      Phone: '',
      
    });
    const [formValid, setFormValid] = useState(false);
    const handleInputChange = (event) => {
      const { placeholder, value } = event.target;
      setShippingDetails((prevState) => ({
        ...prevState,
        [placeholder]: value,
       
      }));

      //validity of form
      setFormValid(event.target.form.checkValidity());
    };
    //
    
    
    const calculatePriceInCurrency = ( price,currency) =>{
     
      if (currency === 'EUR') {
        return (price + (120*totalQuantities) +(45/currencyRates.USD)).toFixed(); 
      } else if (currency === 'GBP') {
        return (price + (120*totalQuantities) +(45/currencyRates.USD)).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'GHC') {
        return (price * 1).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'USD') {
        return (price + (120* totalQuantities) +(45/currencyRates.USD)).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else {
        return price; // Return the original price if no matching currency is found
      }
    }
    const calculatePriceInCurrencyForeign = ( price,currency) =>{
      // Perform any necessary calculations or conversions based on the currency here
      // For simplicity, let's assume the conversion rates are already available
      if (currency === 'EUR') {
        return ( (price+120) * currencyRates.Euro).toFixed(); // Assuming EUR is a predefined conversion rate
      } else if (currency === 'GBP') {
        return ((price +120) * currencyRates.GBP).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'GHC') {
        return (price * 1).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'USD') {
        return ((price+120) * currencyRates.USD).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else {
        return price; // Return the original price if no matching currency is found
      }
    }

    const calculatePriceInCurrencyForeign1 = ( price,currency) =>{
      // Perform any necessary calculations or conversions based on the currency here
      // For simplicity, let's assume the conversion rates are already available
      if (currency === 'EUR') {
        return ( (price+(120*totalQuantities)) * currencyRates.Euro).toFixed(); // Assuming EUR is a predefined conversion rate
      } else if (currency === 'GBP') {
        return ((price+(120 * totalQuantities)) * currencyRates.GBP).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'GHC') {
        return (price).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'USD') {
        return (((price)+(120*totalQuantities)) * currencyRates.USD).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else {
        return price; // Return the original price if no matching currency is found
      }
    }
    const calculatePriceInCurrencyForeign2 = ( price,currency) =>{
      // Perform any necessary calculations or conversions based on the currency here
      // For simplicity, let's assume the conversion rates are already available
      if (currency === 'EUR') {
        return ( (price+(120*totalQuantities)) * currencyRates.Euro).toFixed(); // Assuming EUR is a predefined conversion rate
      } else if (currency === 'GBP') {
        return ((price+(120 * totalQuantities)) * currencyRates.GBP ).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'GHC') {
        return (price).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'USD') {
        return (((price)+(120*totalQuantities)) * currencyRates.USD ).toFixed(); // Assuming GBP is a predefined conversion rate
      }
      else {
        return price; // Return the original price if no matching currency is found
      }
    }
    const delivery = ( currency) =>{
      // Perform any necessary calculations or conversions based on the currency here
      // For simplicity, let's assume the conversion rates are already available
      if (currency === 'EUR') {
        return 'USD 45' // Assuming EUR is a predefined conversion rate
      } else if (currency === 'GBP') {
        return 'USD 45' // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'GHC') {
        return 'Pay On Delivery' // Assuming GBP is a predefined conversion rate
      }
      else if (currency === 'USD') {
        return 'USD 45' 
      }
      else {
        return price; 
      }
    }
   
   
    
  const config = {
    reference: (new Date()).getTime(),
    username: `${user.name}`,
    email: `${user.email}`,
    amount: `${calculatePriceInCurrency(totalPrice,selectedCurrency) *100}`,
    //publicKey: 'pk_live_7818dae2e6cdb971945ad64c97354ea97bc01afb',
    publicKey: 'pk_test_1156b935d863b0c6d92a19b3678d034562cf062a',
    currency: 'GHS',
    metadata:{
      "custom_fields":[
        
        {
          display_name:'Cart Items',
          variable_name:'cart_items',
          value: JSON.stringify(cartItems)
        },
        {
          display_name: 'Shipping Details',
          variable_name: 'shipping_details',
          value: JSON.stringify(shippingDetails),
        },
      ]
    }
};
 

const onSuccess = (reference) => {
  
  clearCart();
router.push('/Success') 
};

const onClose = () => {
  
 
  console.log(reference);

}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div className='btn-container'>
          <button  type = 'button' className='btn' onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Submit and Pay</button>
      </div>
    );
};

 
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft className='text-orange-800'/>
          <span className="heading text-orange-800">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/Customize">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} alt='pics' className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4> {selectedCurrency} {calculatePriceInCurrencyForeign(item.price,selectedCurrency)}</h4> 
                </div>
                <div className="flex bottom">
                  <div>
               
                  <p className="quantity-desc flex items-center">
         <button className="minus border border-gray-300 rounded-full px-2 py-1 mr-1 focus:outline-none" onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M13 9H7v2h6V9z" clipRule="evenodd" />
    </svg>
  </button>
  <span className="num font-semibold">{item.quantity}</span>
  <button className="plus border border-gray-300 rounded-full px-2 py-1 ml-1 focus:outline-none" onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12 13V7h2v6h6v2h-6v6h-2v-6H6v-2h6z" clipRule="evenodd" />
    </svg>
  </button>
</p>

                  </div>
                  <button
                    type="button"
                    className="remove-item p-2"
                    onClick={() => onRemove(item,selectedCurrency)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
             
            </div>
        <div className='btn-container'>
         <div > 
         <button onClick={handleClick} className='btn' >checkout </button>
         
         { showForm && (
          <form className="text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-6">
             <div className="items-center flex justify-between">
    
    <strong>CHECKOUT</strong>
    <div className="text-right">
    <TiDeleteOutline onClick={handleClose} size={40} className="cursor-pointer"/>
    </div>
  </div>

  <br/>
  <p>Total : {selectedCurrency} {calculatePriceInCurrencyForeign1(totalPrice,selectedCurrency)}</p>
  <p> Delivery Fee : {delivery(selectedCurrency)}</p>
  
  <br />
  <strong>SHIPPING/DELIVERY DETAILS</strong>
      
  <input type="text" placeholder="Name" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Name} onChange={handleInputChange} required />
  <input type="text" placeholder="Phone" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Phone} onChange={handleInputChange} required />
  <input type="text" placeholder="Address" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Address} onChange={handleInputChange} required />
  {formValid && <PaystackHookExample />}
  
</form> 

)}

         </div> 
          </div>          
            
          </div>
        )}
      </div>
    </div>
  )
}




export default Cartlogin 
