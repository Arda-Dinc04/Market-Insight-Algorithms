import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#2E3B55', // Custom background color
        },
      }}
    >
      <List>
        {[
          { text: 'Home', path: '/' },
          { text: 'Calendar', path: '/Calendar' },
          { text: 'Analytics', path: '/Analytics' },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleClick(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: '#4F5D75', // Hover color
              },
              '&.Mui-selected': {
                backgroundColor: '#6B7AA1', // Selected color
              },
              color: '#FFFFFF', // Text color
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
