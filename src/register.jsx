import React, { useState } from 'react';
import './register.css';

const RegistrationForm = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [formData, setFormData] = useState({
    // Company Registration Fields
    companyName: '',
    ownerFirstName: '',
    ownerMiddleName: '',
    ownerLastName: '',
    ownerEmail: '',
    gender: '',
    contactNumber: '',
    address: '',
    description: '',
    profileImage: null,
    gallery: [],
    events: [],
    cateringName: '',
    menuDetails: '',
    functionHallName: '',
    hallCapacity: '',

    // Social Media Profile IDs
    facebookProfile: '',
    twitterProfile: '',
    instagramProfile: '',
    linkedinProfile: '',

    // User Registration Fields
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  const [showEvents, setShowEvents] = useState(false);
  const [showCatering, setShowCatering] = useState(false);
  const [showFunctionHall, setShowFunctionHall] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'gallery') {
      setFormData({ ...formData, [name]: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleEventSelection = (e) => {
    const { value, checked } = e.target;
    const updatedEvents = checked
      ? [...formData.events, value]
      : formData.events.filter((event) => event !== value);
    setFormData({ ...formData, events: updatedEvents });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration Successful!');
  };

  const handleSignIn = (method) => {
    console.log(`${method} Sign In`);
    // Add your sign-in logic here (e.g., redirecting or calling an API)
  };

  return (
    <div className="form-container">
      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'company' ? 'active' : ''}`}
          onClick={() => setActiveTab('company')}
        >
          Company Registration
        </button>
        <button
          className={`tab ${activeTab === 'user' ? 'active' : ''}`}
          onClick={() => setActiveTab('user')}
        >
          User Registration
        </button>
      </div>

      {activeTab === 'company' && (
        <form onSubmit={handleSubmit} className="form-content">
          <h1 className="form-header">Company Registration</h1>

          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              placeholder="Enter your company name"
            />
          </div>

          <h2>Owner's Information</h2>

          <div className="form-group">
            <label htmlFor="ownerFirstName">First Name:</label>
            <input
              type="text"
              id="ownerFirstName"
              name="ownerFirstName"
              value={formData.ownerFirstName}
              onChange={handleInputChange}
              required
              placeholder="Enter owner's first name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerMiddleName">Middle Name:</label>
            <input
              type="text"
              id="ownerMiddleName"
              name="ownerMiddleName"
              value={formData.ownerMiddleName}
              onChange={handleInputChange}
              placeholder="Enter owner's middle name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerLastName">Last Name:</label>
            <input
              type="text"
              id="ownerLastName"
              name="ownerLastName"
              value={formData.ownerLastName}
              onChange={handleInputChange}
              required
              placeholder="Enter owner's last name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="ownerEmail">Email:</label>
            <input
              type="email"
              id="ownerEmail"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleInputChange}
              required
              placeholder="Enter owner's email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              placeholder="Enter contact number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Company Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Describe your company"
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gallery">Gallery Images/Videos:</label>
            <input
              type="file"
              id="gallery"
              name="gallery"
              accept="image/*,video/*"
              multiple
              onChange={handleFileChange}
            />
          </div>

          <h2>Social Media Profile IDs</h2>
          <div className="form-group">
            <label htmlFor="facebookProfile">Facebook Profile ID:</label>
            <input
              type="text"
              id="facebookProfile"
              name="facebookProfile"
              value={formData.facebookProfile}
              onChange={handleInputChange}
              placeholder="Enter Facebook Profile ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitterProfile">Twitter Profile ID:</label>
            <input
              type="text"
              id="twitterProfile"
              name="twitterProfile"
              value={formData.twitterProfile}
              onChange={handleInputChange}
              placeholder="Enter Twitter Profile ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="instagramProfile">Instagram Profile ID:</label>
            <input
              type="text"
              id="instagramProfile"
              name="instagramProfile"
              value={formData.instagramProfile}
              onChange={handleInputChange}
              placeholder="Enter Instagram Profile ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedinProfile">LinkedIn Profile ID:</label>
            <input
              type="text"
              id="linkedinProfile"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleInputChange}
              placeholder="Enter LinkedIn Profile ID"
            />
          </div>

          <div className="details-section">
            <h2>Select Additional Details</h2>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={showEvents}
                  onChange={() => setShowEvents(!showEvents)}
                />
                Event Details
              </label>
            </div>
            {showEvents && (
              <div className="event-details">
                <h3>Events</h3>
                <div className="checkbox-group">
                  {['Birthday Party', 'Office Events', 'Wedding', 'Conference', 'Other'].map((event) => (
                    <label key={event}>
                      <input
                        type="checkbox"
                        value={event}
                        checked={formData.events.includes(event)}
                        onChange={handleEventSelection}
                      />
                      {event}
                    </label>
                  ))}
                </div>
              </div>
            )}
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={showCatering}
                  onChange={() => setShowCatering(!showCatering)}
                />
                Catering
              </label>
            </div>
            {showCatering && (
              <div className="catering-details">
                <h3>Catering Details</h3>
                <div className="form-group">
                  <label htmlFor="cateringName">Catering Name:</label>
                  <input
                    type="text"
                    id="cateringName"
                    name="cateringName"
                    value={formData.cateringName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="menuDetails">Menu Details:</label>
                  <textarea
                    id="menuDetails"
                    name="menuDetails"
                    value={formData.menuDetails}
                    onChange={handleInputChange}
                    placeholder="Describe menu details"
                  />
                </div>
              </div>
            )}
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={showFunctionHall}
                  onChange={() => setShowFunctionHall(!showFunctionHall)}
                />
                Function Hall
              </label>
            </div>
            {showFunctionHall && (
              <div className="hall-details">
                <h3>Function Hall Details</h3>
                <div className="form-group">
                  <label htmlFor="functionHallName">Hall Name:</label>
                  <input
                    type="text"
                    id="functionHallName"
                    name="functionHallName"
                    value={formData.functionHallName}
                    onChange={handleInputChange}
                    placeholder="Enter hall name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="hallCapacity">Capacity:</label>
                  <input
                    type="text"
                    id="hallCapacity"
                    name="hallCapacity"
                    value={formData.hallCapacity}
                    onChange={handleInputChange}
                    placeholder="Enter hall capacity"
                  />
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}

      {activeTab === 'user' && (
        <div className="form-content">
          <h1 className="form-header">User Registration</h1>

          <div className="form-group">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
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
              value={formData.userPassword}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>

          <div className="social-signin">
            <h2>Or Sign In With</h2>
            <button onClick={() => handleSignIn('Google')}>Google</button>
            <button onClick={() => handleSignIn('Facebook')}>Facebook</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
