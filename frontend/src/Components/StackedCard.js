// StackCard.js

import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from './Cards'; // Adjust the path as necessary
import Box from '@mui/material/Box';

function StackCard({ cards }) {
  if (cards.length <= 2) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
        {cards.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            price={card.price}
            ratio={card.ratio}
            brokers={card.brokers}
            topColor={card.topColor}
          />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', width: '300px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      {cards.map((card, index) => (
        <CustomCard
          key={index}
          title={card.title}
          price={card.price}
          ratio={card.ratio}
          brokers={card.brokers}
          topColor={card.topColor}
          sx={{ position: 'absolute', top: `${index * 10}px`, left: `${index * 10}px`, zIndex: cards.length - index }}
        />
      ))}
    </Box>
  );
}

StackCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.string,
      ratio: PropTypes.string,
      brokers: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          price: PropTypes.string,
          bgColor: PropTypes.string,
        })
      ),
      topColor: PropTypes.string,
    })
  ).isRequired,
};

export default StackCard;
