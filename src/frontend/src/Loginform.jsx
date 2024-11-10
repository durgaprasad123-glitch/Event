import React, { useState } from 'react';
import './auth.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userEmail: '',
    userPassword: ''
  });
  const [error, setError] = useState(null); // To capture any login errors

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset previous error

    try {
      // Use the apiUrl from the environment variable
      const apiUrl = import.meta.env.VITE_API_URL;

      // Make the login request
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login Success:', data.message);

      // Store the JWT token in localStorage
      localStorage.setItem('authToken', data.token);

      alert('Login Successful!');
      // Optionally redirect the user after successful login
      // window.location.href = '/dashboard'; // or use react-router to navigate
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message); // Set error message to show it in the UI
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
        {error && <div className="error-message">{error}</div>} {/* Display error */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
