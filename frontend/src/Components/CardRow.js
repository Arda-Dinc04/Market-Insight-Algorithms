import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomCard from './Cards'; // Adjust the path as necessary
import StackCard from './StackedCard'; // Adjust the path as necessary
import dateSections from './testData'; // Adjust the path as necessary

function CardRow() {
  return (
    <Box sx={{ position: 'relative', padding: 2, overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        {dateSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} className="date-section" sx={{ display: 'inline-block', position: 'relative', margin: '0 20px', visibility: 'visible' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '10px' }}>
              {section.date}
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'flex-start' }}>
              {section.cards.length > 2 ? (
                <StackCard cards={section.cards} />
              ) : (
                section.cards.map((card, cardIndex) => (
                  <CustomCard
                    key={cardIndex}
                    title={card.title}
                    price={card.price}
                    ratio={card.ratio}
                    brokers={card.brokers}
                    topColor={card.topColor}
                    sx={{ margin: '0 10px' }}
                  />
                ))
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CardRow;
