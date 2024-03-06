// Favorites.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Favorites = () => {
  const { state, addToCart, addToFavorites } = useCart();

  return (
    <div style={{ width: '400px', marginTop: '20px' }}>
      <h2>Favorite Items</h2>
      <div className="favorite-items">
        {state.favoriteItems.length > 0 ? (
          state.favoriteItems.map((item) => (
            <Card key={item.id} className="favorite-item" style={{ marginBottom: '20px' }}>
              <CardMedia
                component="img"
                height="140"
                image={`data:${item.Image.contentType};base64,${item.Image.data}`}
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
              <Link to={{ pathname: `/pet/${item.Petcode}`, state: { item } }}>
                <Button variant="contained" color="primary" fullWidth>
                  View Details
                </Button>
              </Link>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </Button>
            </Card>
          ))
        ) : (
          <p>No favorite items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
