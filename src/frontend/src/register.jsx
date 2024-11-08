import React, { useState } from 'react';
import './auth.css';

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    linkedinProfile: '',
    events: [],
    cateringName: '',
    menuDetails: '',
    functionHallName: '',
    hallCapacity: '',
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleEventSelection = (e) => {
    const { value } = e.target;
    setRegistrationData((prevData) => {
      const events = prevData.events.includes(value)
        ? prevData.events.filter((event) => event !== value)
        : [...prevData.events, value];
      return { ...prevData, events };
    });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      console.log('Registration Success:', data.message);
      // Optionally reset the form or redirect the user
      setRegistrationData({
        userName: '',
        userEmail: '',
        userPassword: '',
        linkedinProfile: '',
        events: [],
        cateringName: '',
        menuDetails: '',
        functionHallName: '',
        hallCapacity: '',
      });
    } catch (error) {
      console.error('Error during registration:', error.message);
      // Optionally display error to the user
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegistrationSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="userName"
            value={registrationData.userName}
            onChange={handleRegistrationChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="userEmail"
            value={registrationData.userEmail}
            onChange={handleRegistrationChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="userPassword"
            value={registrationData.userPassword}
            onChange={handleRegistrationChange}
            required
          />
        </div>
        <div>
          <label>LinkedIn Profile:</label>
          <input
            type="text"
            name="linkedinProfile"
            value={registrationData.linkedinProfile}
            onChange={handleRegistrationChange}
          />
        </div>
        <div>
          <label>Catering Name:</label>
          <input
            type="text"
            name="cateringName"
            value={registrationData.cateringName}
            onChange={handleRegistrationChange}
          />
        </div>
        <div>
          <label>Menu Details:</label>
          <textarea
            name="menuDetails"
            value={registrationData.menuDetails}
            onChange={handleRegistrationChange}
          />
        </div>
        <div>
          <label>Function Hall Name:</label>
          <input
            type="text"
            name="functionHallName"
            value={registrationData.functionHallName}
            onChange={handleRegistrationChange}
          />
        </div>
        <div>
          <label>Hall Capacity:</label>
          <input
            type="number"
            name="hallCapacity"
            value={registrationData.hallCapacity}
            onChange={handleRegistrationChange}
          />
        </div>
        <div>
          <label>Select Events:</label>
          <select multiple onChange={handleEventSelection}>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="birthday">Birthday Party</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
