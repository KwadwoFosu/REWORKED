// CurrencyContext.js
{/* import React, { createContext, useContext, useState } from 'react';

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
*/}
import React, { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrencyContext = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }) => {
  const [currencyRates, setCurrencyRates] = useState(null);

  // Load currencyRates from Local Storage if available
  useEffect(() => {
    const storedCurrencyRates = JSON.parse(localStorage.getItem('currencyRates'));
    if (storedCurrencyRates) {
      setCurrencyRates(storedCurrencyRates);
    }
  }, []);

  // Save currencyRates to Local Storage when it changes
  useEffect(() => {
    if (currencyRates) {
      localStorage.setItem('currencyRates', JSON.stringify(currencyRates));
    }
  }, [currencyRates]);

  const setRates = (rates) => {
    setCurrencyRates(rates);
  };

  return (
    <CurrencyContext.Provider value={{ currencyRates, setRates }}>
      {children}
    </CurrencyContext.Provider>
  );
};
