// Home1.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Home.css';
import NavBar from './Navbar';
import baseUrl from '../../Api';
import SearchBar from './Searchbar';
import Imgslider from './Imgslider';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Home1 = () => {
  const [petList, setPetList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const getToken = () => {
    return localStorage.getItem('token');
  };

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    } else {
      const payload = token.split('.')[1];
      try {
        const decodedPayload = atob(payload);
        const { userId } = JSON.parse(decodedPayload);
        axios
          .get(baseUrl + `/signup/user/${userId}`)
          .then((response) => {
            const userData = response.data.user;
            setUsername(userData.username);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.error('Error decoding token payload:', error);
      }
    }

    axios
      .get(baseUrl + '/pet/tfetch')
      .then((response) => {
        setPetList(response.data);
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  const handleSearch = () => {
    axios
      .get(baseUrl + `/pet/tsearch/${searchTerm}`)
      .then((response) => {
        setPetList(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleAddToCart = (pet) => {
    axios
      .post(baseUrl + `/cart/addcart`, { Petcode: pet.Petcode })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-page">
      <NavBar />
      <Imgslider />

      <div className="welcome-section">
        <h1>Welcome {username} to PAWSHUB</h1>
        <p>Find your new furry friend with us!</p>
      </div>

      <div className="featured-pets-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <h2>Featured Pets</h2>
        <div className="featured-pets">
          {petList ? (
            petList.map((pet) => (
              <div key={pet.id} className="featured-pet-card">
                <Link to="/Fav" className="favorites-icon-link">
                  <FavoriteIcon className="favorites-icon" />
                </Link>
                <img src={`data:${pet.Image.contentType};base64,${pet.Image.data}`} alt="petImage" />
                <h3>{pet.PetName}</h3>
                <p>{pet.Breed}</p>
                <div className="button-container">
                  <Link to={{ pathname: `/pet/${pet.Petcode}`, state: { pet } }}>
                    <button className="view-details-button">View Details</button>
                  </Link>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(pet)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home1;
