import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomCard({ title = 'Title', price = '$0.00', ratio = '0 : 0', brokers = [], color = '#fff', topColor = '#90caf9', sx }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        width: 300,
        margin: 2,
        borderRadius: 2,
        transition: 'transform 0.3s, width 0.3s, height 0.3s, z-index 0.3s',
        transform: hovered ? 'scale(1.1)' : 'scale(1)',
        zIndex: hovered ? 100 : 1,
        overflow: 'hidden', // Ensuring the card content does not overflow
        ...sx,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ backgroundColor: topColor, padding: '8px 16px', borderRadius: '4px 4px 0 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div" sx={{ color: '#fff', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
            {price}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography
          variant="h4"
          component="div"
          sx={{ textAlign: 'center', mb: 2, fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          {ratio}
        </Typography>
        {brokers.map((broker, index) => (
          <Box
            key={index}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, backgroundColor: broker.bgColor, padding: '8px', borderRadius: '4px' }}
          >
            <Typography variant="body1">{broker.name}</Typography>
            <Typography variant="body1">{broker.price}</Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default CustomCard;
