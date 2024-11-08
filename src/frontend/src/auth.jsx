// Auth.js
import React, { useState } from 'react';
import LoginForm from './Loginform';
import RegistrationForm from './RegistrationForm';
import './AuthForm.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="auth-container">
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Registration' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default Auth;
