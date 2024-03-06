// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196F3', marginTop: 'auto' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
          <br></br>
          <br></br>
            © {new Date().getFullYear()} PAWS HUB. All rights reserved.
            <br></br>
            <br></br>
            ONLINE SHOPPING<br></br>
            Dogs<br></br>
            Cats<br></br>
            Small Pets<br></br>
            Consult a Vet<br></br>
            Dog Behaviour<br></br>
            Pet Pharmacy<br></br>
            <br></br>
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
