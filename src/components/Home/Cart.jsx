import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import baseUrl from '../../Api';
import { Buffer } from 'buffer';

const Cart = () => {
  const { state, addToCart } = useCart();
  const navigate = useNavigate();
  const [cartItemsWithPets, setCartItemsWithPets] = useState([]);

  useEffect(() => {
    const fetchCartItemsWithPets = async () => {
      try {
        const response = await axios.get(baseUrl + `/cart/cart`);
        const cartItems = response.data;
        console.log(cartItems.petsInCart)
        setCartItemsWithPets(cartItems.petsInCart);
        // Fetch corresponding pets for each cart item
        const petResponse = await axios.post('http://localhost:4000/pets/fetch', {
          petcodes: cartItems.map((item) => item.Petcode),
        });
        const petsInCart = petResponse.data;

        // Combine cart items with pet information
        const cartItemsWithPets = cartItems.map((cartItem) => {
          const correspondingPet = petsInCart.find((pet) => pet.Petcode === cartItem.Petcode);
          return { ...cartItem, pet: correspondingPet };
        });

        setCartItemsWithPets(cartItemsWithPets);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItemsWithPets();
  }, []); // Empty dependency array means this effect runs once after the first render

  const handleNavigate = () => {
    console.log('clicked');
    navigate('/home1');
  };

  const handleBuy = async (item) => {
    try {
      // Send the item data to the server
      await axios.post('http://localhost:4000/cart/cart', item);
      console.log('Item added to the cart on the server');

      // Add the item to the local cart state
      addToCart(item);
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  return (
    <div>
      <NavBar />
      <div style={{ width: '400px', marginTop: '20px' }}>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItemsWithPets.map((item) => (
            <Card key={item.id} className="cart-item" style={{ marginBottom: '20px' }}>
              <CardMedia
                component="img"
                height="140"
                image={`data:${item.Image.contentType};base64,${Buffer.from(item.Image.data).toString('base64')}`}
                alt="petImage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.PetName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.Breed}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleBuy(item)} // Call handleBuy function on button click
              >
                Buy
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
