import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('caterers');
  const [catererDetails, setCatererDetails] = useState(null);

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  const showDetails = (catererId) => {
    const details = {
      caterer1: {
        name: 'Gourmet Delights',
        description: 'Exquisite dishes with a touch of elegance for any occasion.',
        steps: ['Initial consultation', 'Menu planning', 'Food preparation', 'Delivery and setup', 'Post-event clean-up'],
        menu: 'Standard Menu: Shrimp Scampi, Caesar Salad, Garlic Bread',
        specialMenu: 'Signature Shrimp Scampi, Lobster Mac and Cheese',
      },
      caterer2: {
        name: 'Classic Eats',
        description: 'Traditional flavors with a modern twist. Perfect for classic events.',
        steps: ['Initial consultation', 'Menu planning', 'Food preparation', 'Delivery and setup', 'Post-event clean-up'],
        menu: 'Standard Menu: Roasted Chicken, Mashed Potatoes, Gravy',
        specialMenu: 'Grilled Ribeye Steak, Baked Lobster',
      },
      // Add more caterer details as needed
    };
    setCatererDetails(details[catererId]);
    showTab('details');
  };

  return (
    <div className="App">
      <main>
        <h1 className="title">Find Catering Services</h1>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'caterers' ? 'active' : ''}`}
            onClick={() => showTab('caterers')}
          >
            Caterers
          </button>
          <button
            className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => showTab('details')}
          >
            Catering Details
          </button>
          <button
            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => showTab('register')}
          >
            Registration
          </button>
        </div>

        {activeTab === 'caterers' && (
          <div id="caterers" className="tab-content active">
            <div className="caterer-grid">
              <div className="caterer-card" onClick={() => showDetails('caterer1')}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s"
                  alt="Caterer 1"
                />
                <div className="content">
                  <h3>Gourmet Delights</h3>
                  <p>Exquisite dishes with a touch of elegance for any occasion.</p>
                </div>
              </div>
              <div className="caterer-card" onClick={() => showDetails('caterer2')}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi67gEDX54OfFRFFLSK3Y9SI9nOfjYWBE5A&s"
                  alt="Caterer 2"
                />
                <div className="content">
                  <h3>Classic Eats</h3>
                  <p>Traditional flavors with a modern twist. Perfect for classic events.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'details' && (
          <div id="details" className="tab-content">
            {catererDetails && (
              <div className="caterer-details">
                <h2>{catererDetails.name}</h2>
                <p>{catererDetails.description}</p>
                <h3>Menu:</h3>
                <p>{catererDetails.menu}</p>
                <h3>Special Menu:</h3>
                <p>{catererDetails.specialMenu}</p>
              </div>
            )}
            <div className="details-form">
              <label>Number of Persons:</label>
              <input type="number" placeholder="Enter number of persons" required />
              <label>Menu:</label>
              <textarea rows="4" placeholder="Enter menu details" required></textarea>
              <label>Special Menu:</label>
              <textarea rows="4" placeholder="Enter special menu details"></textarea>
              <button>Submit</button>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div id="register" className="tab-content">
            <div className="registration-form">
              <h2>Caterer Registration</h2>
              <label>About:</label>
              <textarea rows="4" placeholder="Tell us about your services" required></textarea>
              <label>Hygiene Standards:</label>
              <textarea rows="4" placeholder="Describe your hygiene standards" required></textarea>
              <label>Upload Photos:</label>
              <input type="file" multiple accept="image/*" />
              <label>Address:</label>
              <input type="text" placeholder="Enter address" required />
              <label>Contact Details:</label>
              <input type="text" placeholder="Enter contact details" required />
              <label>Instagram Link:</label>
              <input type="url" placeholder="Enter Instagram link" />
              <label>Facebook Link:</label>
              <input type="url" placeholder="Enter Facebook link" />
              <button>Register</button>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>&copy; 2024 Event Planner & Catering Services</p>
      </footer>
    </div>
  );
}

export default App;
