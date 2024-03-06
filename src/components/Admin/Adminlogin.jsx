import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import baseUrl from '../../Api';
import adminloginImage from './paws.jpg'; // Import the image

const Adminlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(baseUrl + `/adminlogin/login`, {
        Email: username,
        Password: password,
      });

      if (response.data.success) {
        alert('Login successful');
        console.log(response.data);
        navigate('/Adminhome');
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
        backgroundImage: `url(${adminloginImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Card variant="outlined">
          <CardContent>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h1>
            <form
              onSubmit={handleLogin}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
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
              <Button type="submit" variant="contained" color="primary" style={{ alignSelf: 'center' }}>
                Login
              </Button>
              {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Adminlogin;
