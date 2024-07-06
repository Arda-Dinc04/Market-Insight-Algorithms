import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CustomCard from './Cards';

function DateSection({ date, cards }) {
  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <Box
        key={index}
        sx={{
          transform: cards.length > 2 ? `translate(${index * 25}px, ${index * 25}px)` : 'none',
          position: 'relative',
          zIndex: cards.length - index,
        }}
      >
        <CustomCard {...card} />
      </Box>
    ));
  };

  return (
    <Box sx={{ margin: '16px', textAlign: 'center' }}>
      <Typography variant="h6" component="div" sx={{ marginBottom: '8px' }}>
        {date}
      </Typography>
      {cards.length > 2 ? (
        <Stack
          spacing={-37}
          direction="column"
          alignItems="center"
          sx={{ position: 'relative' }}
        >
          {renderCards(cards)}
        </Stack>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {renderCards(cards)}
        </Box>
      )}
    </Box>
  );
}

export default DateSection;
