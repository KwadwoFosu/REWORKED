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
    <div className='text-black bg-gray-200 font-bold text-lg '>
      <select onChange={handleSelectChange} value={selectedCurrency}>
        <option value="GHC">GHC(Currency)</option>
        <option value='USD'>USD(Currency)</option>
        <option value="EUR">EUR(Currency)</option>
        <option value="GBP">GBP(Currency)</option>
      </select>
    </div>
  );
};

export default Currency;
