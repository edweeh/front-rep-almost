// Homeuser.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import PetsIcon from '@mui/icons-material/Pets';
import backgroundImage from './wallpape.jpg';

const Homeuser = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToPsignup = () => {
    navigate('/signup');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: `url(${backgroundImage})`, // Apply the background image
        backgroundSize: 'cover',
      }}
    >
      {/* App Bar with unique color */}
      <AppBar position="static" sx={{ backgroundColor: '#2196F3' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          {/* Use PetsIcon here */}
          <PetsIcon sx={{ color: 'white', fontSize: '4rem', marginRight: '8px',alignItems:'center' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '2.5rem' }}>
            PAWS HUB!
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container>
        {/* Your main content goes here */}
        <br />
        <br />
        <br />
        <br />
        <Typography variant="h4" component="div" sx={{ marginTop: 4 }}>
          Welcome to Your App!
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
          "Welcome to our extraordinary pet haven, where tails wag, feathers flutter, <br></br>
          and hearts melt with the sheer joy of companionship! At PAWS HUB!,<br></br>
          we believe in creating a world where every pet finds its forever home.<br></br>
          Our passion for furry, feathery, and scaly friends drives us to curate<br></br>
          a collection of the finest companions for you. From playful puppies to majestic<br></br>
          parrots, our aisles echo with the laughter and chirps of happiness. Step into a<br></br>
          wonderland of pet care, where love knows no bounds. Discover the perfect addition <br></br>
          to your family, supported by our knowledgeable team dedicated to ensuring <br></br>
          the well-being and happiness of every critter that graces our space. Join us in<br></br>
          celebrating the extraordinary bond between humans and their beloved pets – because<br></br>
           at PAWS HUB!, every wag of a tail is a story waiting to be shared, and <br></br>
           every purr is a melody of pure contentment. Welcome to a world where your pet's dreams<br></br>
            come true!"
        </Typography>

        {/* Style the Login and Signup buttons */}
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={navigateToLogin}>
          Login
        </Button>
        <Button variant="outlined" color="primary" sx={{ marginTop: 2, marginLeft: 2 }} onClick={navigateToPsignup}>
          Signup
        </Button>
      </Container>

      <br />
      <br />
      <br />
      <br />

      {/* Standardized Footer */}
      <Footer />
    </div>
  );
};

export default Homeuser;
