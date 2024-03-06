import React, { useState } from 'react';
import axios from 'axios';
import './psignup.css'; // Import your CSS file
import baseUrl from '../../Api'
import { useNavigate } from 'react-router-dom';

const Psignup = () => {
  const initialInputs = {
    "FirstName": '',
    "lastname": '',
    "email": '',
    "username": '',
    "password": '',
  };

  const [inputs, setInputs] = useState(initialInputs);
  const navigate = useNavigate();

  const InputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const SaveData = () => {
    console.log("Attempting to save data:", inputs);
    axios.post( baseUrl+"/signup/snew", inputs)
      .then((response) => {
        alert("Record Saved");
        navigate('/login');

      })
      .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setInputs(initialInputs);
  };

  return (
    
    <center>
      <div className='img-bg'></div>
      <div className="container">
        <div className='signup-form'>
          <h1 className="header-text">Create an Account</h1>
          <form>
          <div className="form-group">
              <label htmlFor="FirstName">First Name:</label>
              <input
                type="text"
                name="FirstName"
                className="input-text"
                placeholder="First Name"
                onChange={InputHandler}
                value={inputs.FirstName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                name="lastname"
                className="input-text"
                placeholder="Last Name"
                onChange={InputHandler}
                value={inputs.lastname}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                className="input-text"
                placeholder="Email"
                onChange={InputHandler}
                value={inputs.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                className="input-text"
                placeholder="Username"
                onChange={InputHandler}
                value={inputs.username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                className="input-text"
                placeholder="Password"
                onChange={InputHandler}
                value={inputs.password}
              />
            </div>
            <div className="form-group">
              <button type="reset" className="login-btn btn-primary-soft btn" onClick={handleReset}>
                Reset
              </button>
              <button type="button" onClick={SaveData} className="login-btn btn-primary btn">
                Sign Up
              </button>
            </div>

            <div className="form-group">
              <label className="sub-text">
                Already have an account?
                <a href="Login" className="hover-link1 non-style-link">
                  Login
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </center>
  );
}

export default Psignup;
