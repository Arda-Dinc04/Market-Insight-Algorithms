import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

function Sidebar({ authenticated }) {
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
          backgroundColor: '#2E3B55',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
      }}
    >
      <List>
        {[
          { text: 'Home', path: '/', icon: <HomeIcon /> },
          { text: 'Calendar', path: '/calendar', icon: <CalendarTodayIcon /> },
          { text: 'Analytics', path: '/analytics', icon: <BarChartIcon /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleClick(item.path)}
            sx={{
              '&:hover': {
                backgroundColor: '#4F5D75',
              },
              '&.Mui-selected': {
                backgroundColor: '#6B7AA1',
              },
              color: '#FFFFFF',
            }}
          >
            <ListItemIcon sx={{ color: '#FFFFFF' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem
          button
          onClick={() => handleClick(authenticated ? '/profile' : '/signin')}
          sx={{
            '&:hover': {
              backgroundColor: '#4F5D75',
            },
            '&.Mui-selected': {
              backgroundColor: '#6B7AA1',
            },
            color: '#FFFFFF',
          }}
        >
          <ListItemIcon sx={{ color: '#FFFFFF' }}><PersonIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
