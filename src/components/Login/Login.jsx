import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bgimg from './loginimg.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:4000/signup/login`, {
        username: username,
        password: password,
      });

      if (response.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);

        // Redirect to the dashboard or any other page
        alert('Login successful');
        console.log(response.data);
        navigate('/Home1'); // Redirect to the dashboard or any other page
      } else {
        setError('Invalid Username or Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      setError('Error occurred during login. Please try again.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // 100% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Login</h1>
          <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 10 }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
              Login
            </Button>
            {error && <p style={{ marginTop: 10, color: 'red' }}>{error}</p>}
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
