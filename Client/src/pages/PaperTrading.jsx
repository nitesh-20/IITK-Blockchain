import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './PaperTrading.css';

const PaperTrading = () => {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState(0);
  const [stockData, setStockData] = useState(null);
  const [companyName, setCompanyName] = useState('Tesla'); // Default company

  const alphaVantageApiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

  // Log to check if API key is loaded properly
  console.log('API Key:', alphaVantageApiKey);

  // Function to fetch stock data
  const fetchStockData = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${companyName}&apikey=${alphaVantageApiKey}`
      );
      
      // Log the entire response to check the data structure
      console.log('API Response:', response.data);

      const data = response.data['Time Series (Daily)'];
      
      if (data) {
        const dates = Object.keys(data).slice(0, 30); // Get the last 30 days
        const prices = dates.map(date => parseFloat(data[date]['4. close']));

        setStockData({
          labels: dates,
          datasets: [
            {
              label: `${companyName} Stock Price`,
              data: prices,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      } else {
        console.error('No data returned for this company');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  // Fetch stock data whenever the company name changes
  useEffect(() => {
    if (alphaVantageApiKey) {
      fetchStockData();
    } else {
      alert('API key is missing!');
    }
  }, [companyName]);

  const handleBuy = () => {
    if (balance >= amount) {
      setBalance(balance - amount);
      alert(`Bought for $${amount}`);
    } else {
      alert('Insufficient balance');
    }
  };

  const handleSell = () => {
    setBalance(balance + amount);
    alert(`Sold for $${amount}`);
  };

  return (
    <div className="paper-trading">
      <h2>Paper Trading</h2>
      <div className="balance">
        <p>Balance: ${balance}</p>
      </div>
      <div className="actions">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={handleBuy}>Buy</button>
        <button onClick={handleSell}>Sell</button>
      </div>

      <div className="company-selector">
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name (e.g., TSLA for Tesla)"
        />
      </div>

      {stockData && stockData.labels && stockData.datasets && (
        <div className="chart">
          <Line data={stockData} />
        </div>
      )}
    </div>
  );
};

export default PaperTrading;
