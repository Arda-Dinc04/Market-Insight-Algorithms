import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, Typography, Grid, Box, LinearProgress, MenuItem, FormControl, Select, InputLabel } from '@mui/material';

function ProfilePage() {
  const [accountMultiplier, setAccountMultiplier] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());

  const handleMultiplierChange = (event) => {
    setAccountMultiplier(event.target.value);
  };

  const months = ['April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const profitData = [
    { month: 'April', profit: 250 },
    { month: 'May', profit: 300 },
    { month: 'June', profit: 350 },
    { month: 'July', profit: 400 },
  ];

  // Function to get the number of days in the current month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Calculate the progress of the current month
  const daysInCurrentMonth = getDaysInMonth(currentMonth, new Date().getFullYear());
  const progressOfCurrentMonth = (currentDay / daysInCurrentMonth) * 100;

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Profile Page</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  marginBottom: 2,
                  bgcolor: 'grey',
                  fontSize: '2rem', // Change the font size
                  fontWeight: 'bold', // Change the font weight
                  fontFamily: 'Arial', // Change the font family
                }}
              >
                JD
              </Avatar>
              <Typography variant="h5">John Doe</Typography>
              <Typography variant="body2" color="textSecondary">Active Member</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6">Full Name</Typography>
              <Typography variant="body1" gutterBottom>John Doe</Typography>
              <Typography variant="h6">Email</Typography>
              <Typography variant="body1" gutterBottom>JohnDoe@gmail.com</Typography>
              <Typography variant="h6">Mobile</Typography>
              <Typography variant="body1" gutterBottom>(098) 765-4321</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Membership History</Typography>
              <ul>
                {months.slice(0, currentMonth + 1).map((month, index) => (
                  <li key={index}>{month}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" gutterBottom>Profit Estimation</Typography>
                <FormControl variant="outlined" sx={{ minWidth: 80 }}>
                  <InputLabel>Accounts</InputLabel>
                  <Select
                    value={accountMultiplier}
                    onChange={handleMultiplierChange}
                    label="Accounts"
                  >
                    {[...Array(6).keys()].map(n => (
                      <MenuItem key={n + 1} value={n + 1}>{n + 1}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {profitData.slice(0, currentMonth + 1).map((data, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                  <Typography variant="body1">{data.month}</Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.month === months[currentMonth] ? progressOfCurrentMonth : 100} 
                    sx={{ marginBottom: 1 }} 
                  />
                  <Typography variant="body2">Estimated Profit: ${(data.profit * accountMultiplier).toFixed(2)}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
