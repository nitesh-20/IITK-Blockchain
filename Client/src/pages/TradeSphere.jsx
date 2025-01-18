import React from 'react';
import './TradeSphere.css';

const sharedClasses = {
  button: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded',
  input: 'border border-border rounded p-2',
  tableCell: 'py-2 px-4',
  tradeButton: 'bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded',
};

const CryptoAsset = ({ rank, name, price, change24h, change7d, marketCap }) => {
  return (
    <tr className="border-b border-border">
      <td className={sharedClasses.tableCell}>{rank}</td>
      <td className={sharedClasses.tableCell}>{name}</td>
      <td className={sharedClasses.tableCell}>{price}</td>
      <td className={`${sharedClasses.tableCell} ${change24h.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change24h}</td>
      <td className={`${sharedClasses.tableCell} ${change7d.includes('-') ? 'text-red-500' : 'text-green-500'}`}>{change7d}</td>
      <td className={sharedClasses.tableCell}>{marketCap}</td>
      <td className={sharedClasses.tableCell}><button className={sharedClasses.tradeButton}>TRADE</button></td>
    </tr>
  );
};

const CryptoAssetsTable = () => {
  const cryptoAssets = [
    { rank: 1, name: "Bitcoin BTC", price: "89,29,458.20", change24h: "1.29%", change7d: "9.44%", marketCap: "176,908.16 B" },
    { rank: 2, name: "Ethereum ETH", price: "2,83,079.63", change24h: "-3.99%", change7d: "1%", marketCap: "34,111.74 B" },
    { rank: 3, name: "XRP XRP", price: "269.58", change24h: "-4.84%", change7d: "32.31%", marketCap: "15,518.07 B" },
    { rank: 4, name: "Tether USDT", price: "86.53", change24h: "-0.03%", change7d: "-0.05%", marketCap: "11,966.36 B" },
    { rank: 5, name: "Solana SOL", price: "20,577.12", change24h: "10.33%", change7d: "28.63%", marketCap: "10,012.50 B" },
    { rank: 6, name: "BNB BNB", price: "60,633.84", change24h: "-2.58%", change7d: "0.82%", marketCap: "8,731.62 B" },
    { rank: 7, name: "Dogecoin DOGE", price: "34.47", change24h: "-3.03%", change7d: "19.52%", marketCap: "5,089.87 B" },
    { rank: 8, name: "USDC USDC", price: "86.57", change24h: "0%", change7d: "-0.01%", marketCap: "4,100.34 B" },
    { rank: 9, name: "Cardano ADA", price: "92.45", change24h: "-4.19%", change7d: "16.03%", marketCap: "3,250.94 B" },
    { rank: 10, name: "TRON TRX", price: "20.82", change24h: "-2.38%", change7d: "-0.69%", marketCap: "1,793.41 B" },
  ];

  return (
    <table className="min-w-full bg-card">
      <thead>
        <tr className="bg-muted text-muted-foreground">
          <th className={sharedClasses.tableCell}>#</th>
          <th className={sharedClasses.tableCell}>Name</th>
          <th className={sharedClasses.tableCell}>Price (₹)</th>
          <th className={sharedClasses.tableCell}>24h %</th>
          <th className={sharedClasses.tableCell}>7d %</th>
          <th className={sharedClasses.tableCell}>Market Cap (Billion ₹)</th>
          <th className={sharedClasses.tableCell}>Action</th>
        </tr>
      </thead>
      <tbody>
        {cryptoAssets.map(asset => (
          <CryptoAsset
            key={asset.rank}
            rank={asset.rank}
            name={asset.name}
            price={asset.price}
            change24h={asset.change24h}
            change7d={asset.change7d}
            marketCap={asset.marketCap}
          />
        ))}
      </tbody>
    </table>
  );
};

const CryptoAssets = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Top Crypto Assets</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className={sharedClasses.button}>All</button>
          <button className={sharedClasses.button}>Top Gainers</button>
          <button className={sharedClasses.button}>Top Losers</button>
        </div>
        <div className="flex items-center">
          <select className={sharedClasses.input}>
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input type="text" placeholder="Search" className={`${sharedClasses.input} ml-2`} />
        </div>
      </div>
      <CryptoAssetsTable />
      <div className="flex justify-center mt-4">
        <button className={sharedClasses.button}>Load More</button>
      </div>
    </div>
  );
};

export default CryptoAssets;
