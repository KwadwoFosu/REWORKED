import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className = 'mx-auto  w-[300px] half:w-[500px] mt-2 text-black  bg-white shadow-xl rounded-lg p-6 mb-[150px] half:mb-[200px]'>
        <strong className='m-2 text-center'>
        Thank You for Your Purchase!  
        </strong>

        <br/>
        <br/>
        
        <p>
        Thank you for shopping with us! Your order is currently being processed. Once confirmed, an email will 
        be sent to you containing tracking information to keep you updated on your
        order's progress.
        <br/>
        We appreciate your business and look forward to serving you again.  
        </p>
        <Link href="/Customize">
              <button
                type="button"
                className="btn text-sm"
              >
                <p className='text-lg'>Continue Shopping</p>
              </button>
            </Link>
    </div>
  )
}

export default index