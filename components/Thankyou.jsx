import React from 'react'

const Thankyou = ({reference}) => {
  return (
    <div className='flex flex-col mx-auto'>
        <Strong>
        Thank You for Your Purchase!  
        </Strong>
        <p>
        Thank you for shopping with us! Your order is currently being processed 
        with reference number {reference}. Once confirmed, an email will be sent to you containing tracking information to 
        keep you updated on your order's 
        progress.We appreciate your business 
        and look forward to serving you again.
        </p>
    </div>
  )
}

export default Thankyou