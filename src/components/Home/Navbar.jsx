// NavBar.js

import React, { useEffect, useState } from 'react';
import { Link ,  useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Badge } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import logo from './logo.jpg';
import { useCart } from './CartContext'; // Import the useCart hook
import baseUrl from '../../Api';
import axios from 'axios';

const NavBar = () => {
  const { state } = useCart(); // Use the useCart hook to access cart state
  const navigate = useNavigate();
  const [count,setCount] = useState(0);

  useEffect(() => {
    const fetchCartItemsCount = async () => {
      try {
        const response = await axios.get(baseUrl + `/cart/count`);
        const cartItemsCount = response.data.itemCount;
        console.log(cartItemsCount);
        setCount(cartItemsCount);
      } catch (error) {
        console.error('Error fetching cart items count:', error);
      }
    };

    fetchCartItemsCount();
  }, []);

  const HandleNavigate =()=>{
    console.log("clicked");
    navigate('/home1');
  }

  return (
    <AppBar position="static">
      <Toolbar>

      <div  >
          <h1>PAWS HUB</h1>
        </div>


        <div  style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img  onClick={HandleNavigate} src={logo} alt="Logo" style={{ marginLeft: '10px', height: '40px', width: '40px', mixBlendMode: 'multiply' }} />
        </div>
        
        <IconButton component={Link} to="/Home2" color="inherit">
          <HomeIcon />
        </IconButton>
        <IconButton component={Link} to="/about" color="inherit">
          <InfoIcon />
        </IconButton>
        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={count} color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
