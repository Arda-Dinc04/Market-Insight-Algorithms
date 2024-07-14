import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomCard from './Cards'; // Adjust the path as necessary
import Box from '@mui/material/Box';

function StackCard({ cards }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

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
    <Box sx={{ position: 'relative', width: '350px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom:'130' }}>
      {cards.map((card, index) => (
        <Box
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{
            position: 'absolute',
            top: `${index * -15}px`,
            left: `${index * 10}px`,
            zIndex: hoveredIndex === index ? 100 : cards.length - index,
            transition: 'transform 0.3s, width 0.3s, height 0.3s, z-index 0.3s',
            transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
            width: hoveredIndex === index ? '320px' : '300px',
            height: hoveredIndex === index ? '400px' : '400px',
            overflow: 'wrap', // Ensuring the card content does not overflow
          }}
        >
          <CustomCard
            title={card.title}
            price={card.price}
            ratio={card.ratio}
            brokers={card.brokers}
            topColor={card.topColor}
          />
        </Box>
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
