import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

function LoginPage({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setAuthenticated(true);
      navigate('/profile');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
      <Typography variant="h4" gutterBottom>Login Page</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </Box>
  );
}

export default LoginPage;
