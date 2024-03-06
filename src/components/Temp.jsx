const initialInputs = {
    username: '',
    password: '',
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [error, setError] = useState(false);

  const handleUsernameChange = (event) => {
    setInputs({ ...inputs, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setInputs({ ...inputs, password: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (inputs.username.trim() === '' || inputs.password.trim() === '') {
      setError(true);
    } else {
      setError(false);
      
      // Make a request to your backend login endpoint
      axios.post(baseUrl + 'petstore/login', inputs)
        .then((response) => {
          // Handle successful login, e.g., redirect or show a success message
          console.log('Login successful:', response.data);
        })
        .catch((error) => {
          // Handle failed login, e.g., show an error message
          console.error('Login failed:', error.response.data);
        });
    }
  };