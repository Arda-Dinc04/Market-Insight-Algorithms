import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Clock from './Components/Clock';
import DateSection from './Components/DateSection';


function App() {
  const dateSections = [
    {
      date: 'Jul 24',
      cards: [
        {
          title: 'FRES',
          price: '$0.33',
          ratio: '1 : 20',
          brokers: [
            { name: 'Charles Schwab', price: '$6.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$6.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#90caf9',
        },
      ],
    },
    {
      date: 'Jul 25',
      cards: [
        {
          title: 'IONM',
          price: '$0.26',
          ratio: '1 : 10',
          brokers: [
            { name: 'Charles Schwab', price: '$4.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$5.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#ffcc80',
        },
        {
          title: 'PHIO',
          price: '$0.06',
          ratio: '1 : 9',
          brokers: [
            { name: 'Charles Schwab', price: '$6.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$6.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#F7A0FF',
        },
      ],
    },
    {
      date: 'Jul 26',
      cards: [
        {
          title: 'IONM',
          price: '$0.26',
          ratio: '1 : 10',
          brokers: [
            { name: 'Charles Schwab', price: '$4.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$5.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#ffcc80',
        },
        {
          title: 'PHIO',
          price: '$0.06',
          ratio: '1 : 9',
          brokers: [
            { name: 'Charles Schwab', price: '$6.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$6.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#F7A0FF',
        },
        {
          title: 'FRES',
          price: '$0.33',
          ratio: '1 : 20',
          brokers: [
            { name: 'Charles Schwab', price: '$6.50', bgColor: '#C8E7FF' },
            { name: 'Fidelity', price: '$5.40', bgColor: '#e0f7e0' },
            { name: 'Robinhood', price: '$6.00', bgColor: '#f7f7e0' },
          ],
          topColor: '#90caf9',
        },
      ],
    },
  ];

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
