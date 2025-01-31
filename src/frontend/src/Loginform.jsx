import React, { useState } from 'react';
import './loginform.css';
import './auth.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userEmail: '',
    userPassword: ''
  });
  const [error, setError] = useState(null);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      console.log('API URL:', apiUrl); // Log the API URL
      console.log('Login Data:', loginData); // Log the login data

      if (!apiUrl) {
        throw new Error('API URL is not set. Please check your .env file');
      }

      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      console.log('Response Status:', response.status); // Log the response status

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData); // Log the error response
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login Success:', data.message); // Log success message
      console.log('Token:', data.token); // Log the token

      localStorage.setItem('authToken', data.token);
      alert('Login Successful!');
    } catch (error) {
      console.error('Error during login:', error.message); // Log the error
      setError(error.message);
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={loginData.userEmail}
            onChange={handleLoginChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            value={loginData.userPassword}
            onChange={handleLoginChange}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;