import React, { useState } from 'react';
import './Loginform.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;