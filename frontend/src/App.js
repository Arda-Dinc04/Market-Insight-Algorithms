import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Clock from './Components/Clock';
import DateSection from './Components/DateSection';
import dateSections from './testData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {dateSections.map((section, index) => (
            <DateSection key={index} date={section.date} cards={section.cards} />
          ))}
        </Box>
      </header>
    </div>
  );
}

export default App;
