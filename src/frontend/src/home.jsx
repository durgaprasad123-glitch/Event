import React from 'react';
import './home.css'; // Use this for custom styles or CSS modules

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="logo">EventCo</div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/register">Register</a>
      </nav>
      <div className="search-location">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="location-icon">📍</div>
        <div className="location-details">Current Location</div>
      </div>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to EventCo!</h1>
      <p>Your one-stop solution for planning amazing events.</p>
      <a href="/services" className="cta-button">Explore Services</a>
    </section>
  );
}

// Services Section
function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src="path/to/birthday.jpg" alt="Birthday Parties" />
          <h3>Birthday Parties</h3>
        </div>
        <div className="service-card">
          <img src="path/to/wedding.jpg" alt="Weddings" />
          <h3>Weddings</h3>
        </div>
        <div className="service-card">
          <img src="path/to/corporate.jpg" alt="Corporate Events" />
          <h3>Corporate Events</h3>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"EventCo made our wedding day magical!"</p>
          <h4>- Sarah & John</h4>
        </div>
        <div className="testimonial-card">
          <p>"Best service for corporate events!"</p>
          <h4>- XYZ Corp</h4>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <p>&copy; 2024 EventCo. All Rights Reserved.</p>
    </footer>
  );
}

export default Home;
