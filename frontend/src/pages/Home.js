import React from 'react';
import Clock from '../Components/Clock';
import CardRow from '../Components/CardRow';
import StockTicker from '../Components/StockTickerRow';

function Home() {
  return (
    <div style={styles.container}>
      {/* Stock Ticker at the Top */}
      <div style={styles.ticker}>
        <StockTicker />
      </div>

      {/* Centered Main Content */}
      <div style={styles.mainContent}>
        {/* Clock Component */}
        <div style={styles.clock}>
          <Clock />
        </div>

        {/* Card Row Component */}
        <div style={styles.cardRow}>
          <CardRow />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    padding: '0 10px', // Added padding to prevent content from touching the edges on mobile
    boxSizing: 'border-box',
  },
  ticker: {
    width: '100%',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
  },
  clock: {
    marginBottom: '20px',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
};

// Example of media queries for responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    container: {
      padding: '0 5px', // Adjust padding for smaller screens
    },
    ticker: {
      width: '100%',
    },
    mainContent: {
      flexDirection: 'column',
    },
  },
  '@media (max-width: 480px)': {
    container: {
      padding: '0 2px', // Adjust padding for smaller screens
    },
  },
};

// Combining styles and media queries
const combinedStyles = {
  ...styles,
  ...mediaQueries,
};

export default function ResponsiveHome() {
  return <Home styles={combinedStyles} />;
}
