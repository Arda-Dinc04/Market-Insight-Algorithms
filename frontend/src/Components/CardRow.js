import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomCard from './Cards'; // Adjust the path as necessary
import StackCard from './StackedCard'; // Adjust the path as necessary
import dateSections from '/Users/yanzewu/PycharmProjects/Market-Insight/frontend/src/testData'; // Adjust the path as necessary
import '/Users/yanzewu/PycharmProjects/Market-Insight/frontend/src/Components/CardRow.css'; // Import the CSS file

function CardRow() {
  return (
    <Box className="card-row-container">
      <Box className="card-container">
        {dateSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} className="card-section">
            <Typography variant="h4" className="card-date">
              {section.date}
            </Typography>
            <Box className="card-inner-container">
              {section.cards.length > 2 ? (
                <StackCard cards={section.cards} />
              ) : (
                section.cards.map((card, cardIndex) => (
                  <Box
                    key={cardIndex}
                    className="card-box"
                  >
                    <CustomCard
                      title={card.title}
                      price={card.price}
                      ratio={card.ratio}
                      brokers={card.brokers}
                      topColor={card.topColor}
                    />
                  </Box>
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