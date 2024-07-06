import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from './Cards';
import { StackCard } from 'react-stack-cards';

function DateSection({ date, cards }) {
  const stackRef = React.useRef();

  const renderCards = (cards) => {
    return cards.map((card, index) => (
      <CustomCard key={index} {...card} />
    ));
  };

  return (
    <Box sx={{ margin: '16px', textAlign: 'center' }}>
      <Typography variant="h6" component="div" sx={{ marginBottom: '8px' }}>
        {date}
      </Typography>
      {cards.length > 2 ? (
        <div ref={stackRef}>
          <StackCard
            width="300px"
            height="auto"
            direction="openTopLeft"
          >
            {renderCards(cards)}
          </StackCard>
        </div>
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
