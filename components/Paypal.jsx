import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPal({ amount, onSuccess,cartItems }) {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'ARj1vhyxgANnr0GhvRItPs748FgdbscIEQ4UOrpgrxh1v5LfAOTR8hGyfJgMJBcgBLMhjE_z23Okue4b' }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
                items: cartItems
               
              },
          
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function (details) {
            // Payment was captured successfully
            onSuccess(details);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default PayPal;
