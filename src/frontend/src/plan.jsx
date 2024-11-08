import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './plan.css';

const dealers = [
  {
    companyName: 'Elegant Events',
    description: 'Specializing in birthdays and corporate events with elegant decor and meticulous planning.',
    phoneNumber: '123-456-7890',
    instagram: 'https://instagram.com/elegantevents',
    facebook: 'https://facebook.com/elegantevents',
    address: '123 Main St, Cityville',
    profileImage: 'https://images-platform.99static.com/27mvgLJbGlCTuFjtvDQODFokcsM=/0x0:1800x1800/500x500/top/smart/99designs-contests-attachments/61/61268/attachment_61268086',
    events: ['Birthday', 'Corporate'],
    detailPage: '/elegant'
  },
  {
    companyName: 'Random Weddings',
    description: 'Turning your dream wedding into reality with exquisite arrangements and personalized service.',
    phoneNumber: '987-654-3210',
    instagram: 'https://instagram.com/dreamweddings',
    facebook: 'https://facebook.com/dreamweddings',
    address: '456 Wedding Lane, Bridal City',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIQ7LnTomSkYSRJ8P75gA1kadzynbYuR03A&s',
    events: ['Wedding', 'Haldi'],
    detailPage: '/dream'
  },
  {
    companyName: 'Party Magic',
    description: 'Bringing magic to every party with creative themes and vibrant setups.',
    phoneNumber: '555-123-4567',
    instagram: 'https://instagram.com/partymagic',
    facebook: 'https://facebook.com/partymagic',
    address: '789 Celebration Rd, Fun Town',
    profileImage: 'https://25327da0089314d6639b.cdn6.editmysite.com/uploads/b/25327da0089314d6639b97d3c7ee100e24522a7f10aa7c9563378dbf03f4a2a3/PARTY%20MAGIC%20BY%20CK-%20PERFIL%20%281%29_1716233104.png?width=2400&optimize=medium',
    events: ['Birthday', 'Pooja', 'Naming'],
    detailPage: '/party'
  },
  {
    companyName: 'Corporate Creations',
    description: 'Professional event management tailored for corporate functions and business gatherings.',
    phoneNumber: '999-888-7777',
    instagram: 'https://instagram.com/corporatecreations',
    facebook: 'https://facebook.com/corporatecreations',
    address: '100 Office Blvd, Business City',
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCCTnoCS63PVUYARks17BYB6QGbh0BrWgPiw&s',
    events: ['Corporate'],
    detailPage:'/corporate'
  },
  // More dealers here
  {
    companyName: 'Glamorous Gatherings',
    description: 'Creating unforgettable glamorous gatherings with style and flair.',
    phoneNumber: '112-358-1321',
    instagram: 'https://instagram.com/glamorousgatherings',
    facebook: 'https://facebook.com/glamorousgatherings',
    address: '22 High St, Luxury Town',
    profileImage: 'https://tse1.mm.bing.net/th?id=OIP.ZlRG7vCPeL1_cktPgAQ06QD6D6&pid=Api&P=0&h=220',
    events: ['Wedding', 'Birthday'],
    detailPage: '/glamor'
  },
  {
    companyName: 'Sunshine Events',
    description: 'Bringing sunshine to your events with vibrant colors and cheerful arrangements.',
    phoneNumber: '444-555-6666',
    instagram: 'https://instagram.com/sunshineevents',
    facebook: 'https://facebook.com/sunshineevents',
    address: '21 Bright Avenue, Sunny City',
    profileImage: 'https://png.pngtree.com/png-clipart/20210912/original/pngtree-sunshine-logo-png-image_6746605.jpg',
    events: ['Pooja', 'Naming'],
    detailPage: '/sun'
  },
  {
    companyName: 'Majestic Memories',
    description: 'Turning your most important moments into majestic memories.',
    phoneNumber: '789-456-1230',
    instagram: 'https://instagram.com/majesticmemories',
    facebook: 'https://facebook.com/majesticmemories',
    address: '33 Castle Blvd, Historic Town',
    profileImage: 'https://tse1.mm.bing.net/th?id=OIP.ul2gtpitMVwWbD_04ys9XgHaEy&pid=Api&P=0&h=220',
    events: ['Wedding', 'Corporate'],
    detailPage: '/Maj'
  },
  {
    companyName: 'Fiesta Fun',
    description: 'Injecting fun and creativity into all your parties with unique setups.',
    phoneNumber: '321-654-9870',
    instagram: 'https://instagram.com/fiestafun',
    facebook: 'https://facebook.com/fiestafun',
    address: '77 Party Lane, Fiesta Town',
    profileImage: 'https://tse2.mm.bing.net/th?id=OIP.2CgWw_X3XdOYIOBOuWbRdAHaE9&pid=Api&P=0&h=220',
    events: ['Birthday', 'Haldi'],
    detailPage: '/fie'
  },
  {
    companyName: 'Royal Receptions',
    description: 'Elegant receptions fit for royalty with lavish decorations.',
    phoneNumber: '999-111-2222',
    instagram: 'https://instagram.com/royalreceptions',
    facebook: 'https://facebook.com/royalreceptions',
    address: '5 Palace Road, King City',
    profileImage: 'https://tse3.mm.bing.net/th?id=OIP.WHSt_gY0XzzShmxQVsVaiQHaHa&pid=Api&P=0&h=220',
    events: ['Wedding'],
    detailPage: '/Royal'
  },
  {
    companyName: 'Vibrant Vibes',
    description: 'Offering vibrant vibes for all types of celebrations.',
    phoneNumber: '222-333-4444',
    instagram: 'https://instagram.com/vibrantvibes',
    facebook: 'https://facebook.com/vibrantvibes',
    address: '88 Music Avenue, Rhythm City',
    profileImage: 'https://tse3.mm.bing.net/th?id=OIP.-GXM6_NPzo6ueQ2dPMUkpwHaER&pid=Api&P=0&h=220',
    events: ['Birthday', 'Naming'],
    detailPage: '/vibe'
  }
];


function App() {
  const [selectedEvent, setSelectedEvent] = useState('');

  const renderDealers = () => {
    const filteredDealers = selectedEvent
      ? dealers.filter(dealer => dealer.events.includes(selectedEvent))
      : dealers;

    if (filteredDealers.length === 0) {
      return <p>No dealers available for this event.</p>;
    }

    return filteredDealers.map((dealer, index) => (
      <div className="dealer-card" key={index}>
        <img src={dealer.profileImage} alt={dealer.companyName} />
        <h3><Link to={dealer.detailPage}>{dealer.companyName}</Link></h3>

        <p><strong>Description:</strong> {dealer.description}</p>
        <p><strong>Phone:</strong> {dealer.phoneNumber}</p>
        <p><strong>Address:</strong> {dealer.address}</p>
      </div>
    ));
  };

  return (
    <div className="container">
      <h1>Find Event Planners</h1>
      <div className="filter-section">
        <label htmlFor="eventFilter">Filter by Event:</label>
        <select id="eventFilter" value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
          <option value="">All Events</option>
          <option value="Birthday">Birthday Party</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate">Corporate Events</option>
          <option value="Pooja">Pooja Ceremonies</option>
          <option value="Naming">Naming/Cradle Ceremony</option>
          <option value="Haldi">Haldi</option>
        </select>
      </div>
      <div className="dealer-list">
        {renderDealers()}
      </div>
    </div>
  );
}

export default App;