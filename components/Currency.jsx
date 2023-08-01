import React from 'react';
import { useStateContext } from '../context/StateContext';

const Currency = () => {
  // Get the selectedCurrency state and handleCurrencyChange function from the StateContext
  const { selectedCurrency, handleCurrencyChange } = useStateContext();

  const handleSelectChange = (event) => {
    const currency = event.target.value;
    // Call the handleCurrencyChange function to update the selectedCurrency in the StateContext
    handleCurrencyChange(currency);
  };

  return (
    <div className='text-black h-2'>
      <select onChange={handleSelectChange} value={selectedCurrency}>
        <option value="GHC">GHC</option>
        <option value="D">D</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
};

export default Currency;
