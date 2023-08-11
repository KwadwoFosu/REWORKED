// CurrencyContext.js
import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currencyRates, setCurrencyRates] = useState(null);

  const setRates = (rates) => {
    setCurrencyRates(rates);
  };

  return (
    <CurrencyContext.Provider value={{ currencyRates, setRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};
