import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from './Cards'; // Adjust the path as necessary
import StackCard from './StackedCard'; // Adjust the path as necessary
import dateSections from './testData.js'; // Adjust the path as necessary

function CardRow() {
  return (
    <Box sx={{ position: 'relative', padding: 2, overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        {dateSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ display: 'inline-block', position: 'relative', margin: '0 20px' }}>
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
