import React, { useState } from 'react';
import './CurrencyConverter.css';

const exchangeRates = {
  'USD': 1.0,
  'EUR': 0.85,
  'GBP': 0.73,
  'INR': 74.18, // 1 USD = 74.18 INR (as of the predefined date)
  // Add more currencies as needed
};

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('USD');
  const [result, setResult] = useState('');

  const convertCurrency = () => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);
      setResult(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
      setResult('Invalid currency code');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  return (
    <div className="currency-converter-container">
      <form onSubmit={handleSubmit} className="converter-form">
        <label htmlFor="amount" className="form-label">Amount:</label>
        <input type="text" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required className="form-input" />

        <label htmlFor="fromCurrency" className="form-label">From Currency:</label>
        <select id="fromCurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} required className="form-input">
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <label htmlFor="toCurrency" className="form-label">To Currency:</label>
        <select id="toCurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} required className="form-input">
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <button type="submit" className="form-button">Convert</button>
      </form>

      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default CurrencyConverter;