// CartContext.js

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Define the initial state
const initialState = {
  cartItems: [],
  favoriteItems: [],
};

// Create a context
const CartContext = createContext();

// Create a reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case 'LOAD_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload,
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart items from MongoDB on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/cart/cart');
        dispatch({ type: 'LOAD_CART_ITEMS', payload: response.data });
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Function to add items to the cart
  const addToCart = async (item) => {
    try {
      dispatch({ type: 'ADD_TO_CART', payload: item });

      // Send the item data to the server
      await axios.post('http://localhost:4000/cart/cart', item);
      console.log('Item added to the cart on the server');
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  // Function to add items to favorites
  const addToFavorites = (item) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, addToFavorites }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
