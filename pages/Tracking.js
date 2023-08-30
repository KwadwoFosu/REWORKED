import React, { useState } from 'react';
import { client } from '../lib/client';

const Tracking = () => {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [fetchedOrder, setFetchedOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const query = `*[_type == "order" && referenceNumber == "${referenceNumber}"][0]`;
      const fetchedOrder = await client.fetch(query);

      if (fetchedOrder) {
        setFetchedOrder(fetchedOrder);
        setErrorMessage('');
      } else {
        setFetchedOrder(null);
        setErrorMessage('Reference Number invalid. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      setErrorMessage('An error occurred while fetching the order.');
    }
  };

  return (
    <div className='mx-auto  w-[300px] half:w-[450px] mt-2 text-black  bg-white shadow-xl rounded-lg p-6 mb-[150px] half:mb-[200px]'>
      <form onSubmit={handleSubmit}>
        <strong>TRACK ORDER</strong>
        
        <input
          type='text'
          placeholder='Reference Number'
          className='mb-4 w-full px-4 py-2 border border-gray-300 rounded'
          value={referenceNumber}
          onChange={(e) => setReferenceNumber(e.target.value)}
          required
        />
        <button className='btn ' type='submit'>
          Submit
        </button>
        
      </form>
      {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
      {fetchedOrder && (
        <div className='border p-4 mt-4'>
        <h2 className='text-lg font-semibold mb-2'>Order Details</h2>
        <p className='mb-1'>
          <span className='font-semibold'>Reference: {fetchedOrder.referenceNumber}</span>
        </p>
        <p className='mb-1'>
          <span className='font-semibold'>Stage: {fetchedOrder.stage}</span>
        </p>
        <h3 className='text-md font-semibold mt-3'>Shipping Details:</h3>
        <ul className='list-disc pl-6 mb-2'>
          <li>
            <span className='font-semibold'>Name: {fetchedOrder.shippingDetails.name}</span>
          </li>
          <li>
            <span className='font-semibold'>Address: {fetchedOrder.shippingDetails.address}</span>
          </li>
          <li>
            <span className='font-semibold'>Phone: {fetchedOrder.shippingDetails.phone}</span>
          </li>
        </ul>
       
      </div>
      
      )}
    </div>
  );
};

export default Tracking;
