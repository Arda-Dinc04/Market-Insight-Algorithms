import React from 'react';
import { Drawer, List, ListItem, ListItemText, Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Calendar', path: '/Calendar' },
    { text: 'Analytics', path: '/Analytics' },
  ];

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
        {navItems.map((item) => (
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
      <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push the profile item to the bottom */}
      <List>
        <ListItem
          button
          onClick={() => handleClick('/Profile')}
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
          <Avatar sx={{ bgcolor: '#FFFFFF', color: '#2E3B55', marginRight: 2, width: '26', height: '26' }}>P</Avatar>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
