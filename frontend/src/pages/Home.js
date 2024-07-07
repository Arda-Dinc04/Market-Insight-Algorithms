// Home.js (or App.js if Home.js does not exist)

import React from 'react';
import Clock from '../Components/Clock';
import CardRow from '../Components/CardRow';
import StockTicker from '../Components/StockTickerRow';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80vw', height: '100vh' }}>
      {/* Stock Ticker at the Top */}
      <div style={{ width: '100%' }}>
        <StockTicker />
      </div>

      {/* Centered Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, width: '100%' }}>
        {/* Clock Component */}
        <div>
          <Clock />
        </div>
        
        {/* Card Row Component */}
        <div>
          <CardRow />
        </div>
      </div>
    </div>
  );
}

export default Home;
