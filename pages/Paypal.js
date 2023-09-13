import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import Warning from '../components/Warning';
import Success from '../components/Success';
import Spinner from '../components/Spinner';
import { useStateContext } from '../context/StateContext';

const SinglePayment = () => {
  const [cancelled, setCancelled] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(null);
  const [shippingDetails, setShippingDetails] = useState({
    Name: '',
    Address: '',
    Phone: '',
    
  });
  const { totalPrice, totalQuantities, cartItems,setShowCart,toggleCartItemQuantity, onRemove,clearCart,selectedCurrency} = useStateContext();
  
  const handleInputChange = (event) => {
    const { placeholder, value } = event.target;
    setShippingDetails((prevState) => ({
      ...prevState,
      [placeholder]: value,
     
    }));

    
  };
  //
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        application_context: {
          shipping_preference: {shippingDetails}
        },
        purchase_units: [
          {
            amount: {
              currency: 'USD',
              value: `${totalPrice}`
            }
          },
          {
            cartItems
          }
        ]
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    setLoading('Finishing transaction ...');

    actions.order.get().then((orderDetails) => {
      // ORDER IS APPROVED BUT NOT COMPLETED YET
      // console.log({ orderDetails });

      actions.order.capture().then((data) => {
        // ORDER IS COMPLETED, MONEY SENT
        setOrderDetails({ data });
        setLoading(null);
      });
    });
  };

  const onCancel = () => {
    setCancelled(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      
      <div className="w-1/4">
        

        <form className="text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-6">
             <div className="items-center flex justify-between">
    
  
   
  </div>

  
  <strong>SHIPPING/DELIVERY DETAILS</strong>
      
  <input type="text" placeholder="Name" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Name} onChange={handleInputChange} required />
  <input type="text" placeholder="Phone" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Phone} onChange={handleInputChange} required />
  <input type="text" placeholder="Address" className="mb-4 w-full px-4 py-2 border border-gray-300 rounded" value={shippingDetails.Address} onChange={handleInputChange} required />
  
        {cancelled && <Warning message="Order cancelled!" dismiss={() => setCancelled(false)} />}
        {orderDetails && (
          <Success message="Transaction complete!" dismiss={() => setOrderDetails(null)} />
        )}

        {loading && <Spinner message={loading} />}

        <PayPalScriptProvider
          options={{
            'client-id': 'ARj1vhyxgANnr0GhvRItPs748FgdbscIEQ4UOrpgrxh1v5LfAOTR8hGyfJgMJBcgBLMhjE_z23Okue4b'
          }}>
          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            createOrder={createOrder}
            onApprove={onApprove}
            onCancel={onCancel}
          />
        </PayPalScriptProvider>
  
</form> 

      </div>
    </div>
  );
};

export default SinglePayment;