import React, { useEffect, useState } from 'react';

const StockTicker = () => {
  const apiKey = 'cq2ruhhr01qkgf3j2330cq2ruhhr01qkgf3j233g'; // Replace with your actual Finnhub API key
  const symbols = ['ADBE', 'AMD', 'GOOGL', 'AMZN', 'AAPL', 'ARM', 'MSFT', 'NVDA', 'COST', 'COMP', 'INTC', 'LIN', 'LBR', 'META', 'MSFT', 'NDX', 'NDAQ', 'NVDA', 'PYPL', 'PEP', 'TSLA', 'QQQ'];

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const responses = await Promise.all(symbols.map(symbol =>
          fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`)
        ));
        const data = await Promise.all(responses.map(response => response.json()));
        const stockData = data.map((stockData, index) => {
          const lastClose = stockData.c || 'N/A';
          const change = stockData.c && stockData.pc ? ((stockData.c - stockData.pc) / stockData.pc * 100).toFixed(2) : 'N/A';
          return {
            symbol: symbols[index],
            price: lastClose,
            change: change
          };
        });
        setStocks(stockData);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 60000); // Update every 60 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="ticker-wrapper" style={styles.tickerWrapper}>
      <div className="ticker-container" style={styles.tickerContainer}>
        {stocks.map(stock => (
          <div key={stock.symbol} className={`stock ${stock.change >= 0 ? 'green' : 'red'}`} style={{ ...styles.stock, ...(stock.change >= 0 ? styles.green : styles.red) }}>
            <span>{stock.symbol}</span>
            <span>{stock.change > 0 ? ' +' : ''}{stock.change}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  tickerWrapper: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#f3f3f3',
    padding: '10px',
    borderRadius: '5px',
    border: '.5px solid #ccc', // Slightly dark border
    position: 'relative',
    boxSizing: 'border-box', // Ensure padding is included in the total width
  },
  tickerContainer: {
    display: 'flex',
    whiteSpace: 'nowrap',
    animation: 'ticker 45s linear infinite',
  },
  stock: {
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginRight: '10px',
  },
  green: {
    backgroundColor: '#e8f5e9',
    color: '#388e3c',
  },
  red: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
  }
};

export default StockTicker;
