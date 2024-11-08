import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useParams } from 'react-router-dom';

import './App.css';

function Halls() {
  const { eventId } = useParams(); // Get the eventId from the URL
  const [date, setDate] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    occasion: '',
  });
  const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(false);
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const functionHallData = [
    { id: 1, image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grand-hotel-logo-design-template-50c7255579b1e9df6d8bae41f78889c1_screen.jpg?ts=1611148225', name: 'Hotel Grand', description: 'A spacious hall ideal for large events and gatherings.', details: 'This grand venue offers state-of-the-art facilities for large-scale events, weddings, and corporate functions.' },
    { id: 2, image: 'https://tse4.mm.bing.net/th?id=OIP.8_1_TQjjwn1-wFCRy_FiGgHaFj&pid=Api&P=0&h=220', name: 'Aurora', description: 'An elegant venue for your sophisticated events.', details: 'Aurora offers a sophisticated and modern environment for elegant events, such as weddings and banquets.' },
    { id: 3, image: 'https://img.freepik.com/free-vector/letter-r-royal-luxury-logo-your-brand_1017-27683.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid', name: 'Royal Space', description: 'Experience luxury with our royal function space.', details: 'Royal Space is perfect for luxurious weddings, gala dinners, and high-end corporate events.' },
    { id: 4, image: 'https://img.freepik.com/premium-vector/garden-logo-vector_848918-13537.jpg', name: 'Garden Pavilion', description: 'Charming outdoor space for a unique and memorable event.', details: 'An ideal outdoor space for weddings and receptions, with beautiful garden settings.' },
    { id: 5, image: 'https://biz.prlog.org/CityView/logo.jpg', name: 'City View Hall', description: 'A modern hall with stunning views of the city skyline.', details: 'City View Hall is a stunning location for events that require an urban backdrop and skyline views.' },
    { id: 6, image: 'https://tse2.mm.bing.net/th?id=OIP.C5NlePLMk45JNslm2VjmewAAAA&pid=Api&P=0&h=220', name: 'Banquet Bliss', description: 'Perfect for weddings and grand celebrations.', details: 'Banquet Bliss is a grand hall, perfect for large celebrations such as weddings and corporate galas.' },
    { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.g75Gw9reUsBH_Gbxy10XvAAAAA&pid=Api&P=0&h=220', name: 'The Grand Ballroom', description: 'An expansive ballroom for large parties and receptions.', details: 'A vast ballroom perfect for large wedding receptions and formal gatherings.' },
    { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.UD63tehlPlIg1ugpA11COQHaHy&pid=Api&P=0&h=220', name: 'Luxury Lounge', description: 'A sophisticated lounge for intimate gatherings.', details: 'Luxury Lounge provides an intimate setting for high-class social events and parties.' },
    { id: 9, image: 'https://tse2.mm.bing.net/th?id=OIP.JayVfy01HNHlPiA9thbwrAAAAA&pid=Api&P=0&h=220', name: 'Cozy Corner Hall', description: 'A warm and inviting space for small events.', details: 'Cozy Corner Hall is ideal for small parties, birthday celebrations, and intimate gatherings.' },
    { id: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.YR23ObXbHW86k3ssJo9ELwHaHa&pid=Api&P=0&h=220', name: 'Seaside Venue', description: 'A picturesque venue by the sea, perfect for outdoor weddings.', details: 'Seaside Venue offers breathtaking views of the sea, making it perfect for outdoor weddings.' },
    { id: 11, image: 'https://tse2.mm.bing.net/th?id=OIP.QyZvdVcmPZ01zkVK8JKddwAAAA&pid=Api&P=0&h=220', name: 'Heritage Hall', description: 'Experience the charm of history in a beautiful setting.', details: 'Heritage Hall provides a classic and charming space for historical and formal events.' },
    { id: 12, image: 'https://tse4.mm.bing.net/th?id=OIP.6-osWWFpuDtUt4RfdNSIRAHaFj&pid=Api&P=0&h=220', name: 'Imperial Hotel', description: 'A rooftop venue with breathtaking views for your special events.', details: 'Imperial Hotel offers an elegant rooftop setting with stunning views for weddings and other special events.' },
  ];

  const selectedHall = functionHallData.find(hall => hall.id === parseInt(eventId));

  // Check availability of the hall for the selected date (you may want to enhance this logic)
  const checkAvailability = () => {
    // In a real-world scenario, you would check against a backend service
    // For simplicity, we assume the hall is always available
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkAvailability()) {
      setIsUserDetailsVisible(true);
    } else {
      alert("The selected date is not available.");
    }
  };

  const proceedToPayment = () => {
    if (userDetails.name && userDetails.email && userDetails.phone && date && userDetails.time && userDetails.occasion) {
      setIsPaymentVisible(true);
      setIsUserDetailsVisible(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const confirmBooking = () => {
    setIsConfirmationVisible(true);
    setIsPaymentVisible(false);
  };

  if (!selectedHall) {
    return <div>No Hall found!</div>; // Handle case where hall is not found
  }

  return (
    <div className="App">
      <main>
        {/* Hall details */}
        <div id="details" className="tab-content">
          <div className="caterer-details">
            <h2>{selectedHall.name}</h2>
            <p>{selectedHall.description}</p>

            <h3>Location:</h3>
            <p>{selectedHall.details}</p>

            {/* Date input and submit button */}
            <label htmlFor="booking-date">Select Date:</label>
            <input type="date" id="booking-date" onChange={(e) => setDate(e.target.value)} required />
            <button onClick={handleSubmit}>Check Availability</button>
          </div>

          {/* User Details Form */}
          {isUserDetailsVisible && (
            <section className="section" id="user-details-section">
              <h2>Enter Your Details</h2>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Full Name" onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Your Email" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />

              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" placeholder="Your Phone Number" onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })} />

              <label htmlFor="time">Preferred Time:</label>
              <input type="time" id="time" onChange={(e) => setUserDetails({ ...userDetails, time: e.target.value })} />

              <label htmlFor="occasion">Occasion:</label>
              <input type="text" id="occasion" placeholder="Type of Occasion" onChange={(e) => setUserDetails({ ...userDetails, occasion: e.target.value })} />

              <button onClick={proceedToPayment}>Proceed to Payment</button>
            </section>
          )}

          {/* Payment Section */}
          {isPaymentVisible && (
            <section className="section" id="payment-section">
              <h2>Select Payment Method</h2>
              <label>
                <input type="radio" value="Credit Card" checked={paymentMethod === 'Credit Card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Credit Card
              </label>
              <label>
                <input type="radio" value="Debit Card" checked={paymentMethod === 'Debit Card'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Debit Card
              </label>
              <label>
                <input type="radio" value="UPI" checked={paymentMethod === 'UPI'} onChange={(e) => setPaymentMethod(e.target.value)} />
                UPI
              </label>
              <button onClick={confirmBooking}>Confirm Booking</button>
            </section>
          )}

          {/* Booking Confirmation */}
          {isConfirmationVisible && (
            <section className="section" id="confirmation-section">
              <h2>Booking Confirmed!</h2>
              <p>Thank you for your booking. You will receive a confirmation email soon.</p>
            </section>
          )}
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Event Planner & Catering Services</p>
      </footer>
    </div>
  );
}

export default Halls;
