// In your Next.js page or component

import PayPal from "../components/Paypal";
import {useStateContext} from '../context/StateContext'



function MyCheckoutPage() {
  const handlePaymentSuccess = (paymentDetails) => {
    // Payment was successful, you can now manually create an order
    // using the paymentDetails and save it to your database
    console.log('Payment succeeded:', paymentDetails);
    // Add logic to save order data to your database manually
  };
  const { totalPrice,cartItems} = useStateContext();

  return (
    <div className=" w-1/2">
      {/* Other checkout components */}
      <PayPal amount={2} onSuccess={handlePaymentSuccess} cartItems={cartItems} />
    </div>
  );
}

export default MyCheckoutPage;
