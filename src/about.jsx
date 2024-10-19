import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Durga Chowdary',
    position: 'CEO & Founder',
    description: 'John brings over a decade of experience in event planning, ensuring every event is executed flawlessly with a vision for perfection.',
  },
  {
    name: 'DeepikaMakkena',
    position: 'Managing Director',
    description: 'Jane is an expert in catering and menu planning, ensuring that your guests enjoy every moment with delicious food and impeccable service.',
  },
  {
    name: 'NayaniChowdary',
    position: 'Creative Director',
    description: 'Emily’s creative touch transforms any venue into a masterpiece, bringing your vision to life with innovative designs and decor.',
  },
  {
    name: 'Hareesh',
    position: 'Project Manager',
    description: 'Michael handles each project with precision, ensuring that every detail is managed seamlessly from start to finish.',
  },
  {
    name: 'AdityaBachina',
    position: 'Event Coordinator',
    description: 'Sarah ensures everything runs smoothly on the day of your event, managing logistics and resources to deliver a flawless experience.',
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <header>
        <div className="logo">Event Planner</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/register">Register</Link>
          <Link to="/Loginform">Login</Link> 
        </nav>
        <div className="search-location">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <span className="location-icon">&#128205;</span>
          <div className="location-details">Fetch Location</div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Event Planner</h1>
          <p>Your one-stop solution for organizing memorable events.</p>
          <a href="/services" className="cta-btn">Explore Services</a>
        </div>
      </section>

      <main className="content">
        <h1>About Us</h1>
        <p className="lead-text">
          At <span className="highlight">EventMaster</span>, we are passionate about creating extraordinary events that leave lasting impressions. Whether it’s a grand wedding, a corporate gala, or an intimate celebration, we bring your vision to life with creativity, professionalism, and a keen eye for detail.
        </p>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We continuously strive to bring fresh ideas and unique solutions to each event, ensuring that your celebration stands out.</p>
            </div>
            <div className="value-item">
              <h3>Excellence</h3>
              <p>We are committed to delivering the highest quality of service, from planning to execution, making sure every detail is perfect.</p>
            </div>
            <div className="value-item">
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our priority. We listen to your needs and tailor every event to exceed your expectations.</p>
            </div>
          </div>
        </div>

        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to make event planning as seamless and enjoyable as possible for our clients. We aim to provide an all-inclusive platform where customers can connect with top event planners, caterers, and venues, ensuring every aspect of the event is handled with care and professionalism.
        </p>

        <h2>Our Vision</h2>
        <p>
          Our vision is to become the go-to platform for stress-free event planning, where every celebration is elevated to new heights with style, efficiency, and creativity. We want to revolutionize the way events are organized, making them more accessible, enjoyable, and memorable for everyone.
        </p>

        <h2>Meet Our Team</h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <h3>{member.name}</h3>
              <p><b>{member.position}</b></p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default AboutUs;
