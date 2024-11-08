import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx'; // Adjust the path if needed
import MainRouter from './MainRouter.jsx';
import home from './home';
import AboutUs from './about';
import RegistrationForm from "./register"; // Adjust path if necessary
import Plan from './plan';
import Caterers from './caters';
import LoginForm from './Loginform';  
import Elegantevents from './Elegantevents.jsx'
//import Dreamweddings from './Ran  domweddings.jsx'
import Partymagic from './Partymagic.jsx'
import CorporateCreations from './CorporateCreations.jsx'
import GlamorousGatherings from './GlamorousGatherings.jsx'
import SunshineEvents from './SunshineEvents.jsx'
import MajesticMemories from './MajesticMemories.jsx'
import FiestaFun from './FiestaFun.jsx'
import RoyalReceptions from './RoyalReceptions.jsx'
import VibrantVibes from './VibrantVibes.jsx'
import Halls from './halls.jsx'
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('events'); // Default tab is 'events'
  const [area, setArea] = useState(''); // Store area name
  const [errorMessage, setErrorMessage] = useState(''); 

  const showTab = (tab) => {
    setActiveTab(tab);
  };

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
          setErrorMessage('');
        },
        (err) => {
          setErrorMessage('Unable to retrieve your location.');
          setArea('');
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
      setArea('');
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );

    if (response.ok) {
      const data = await response.json();
      const areaName = data.locality || data.city || 'Location not found';
      setArea(areaName);
    } else {
      setErrorMessage('Error fetching location data.');
      setArea('');
    }
  };

  return (
    <Router>
      <div className="app">
        <Header onFetchLocation={fetchLocation} area={area} errorMessage={errorMessage} />
        <Routes>
          <Route path="/" element={
            <div>
              <Main activeTab={activeTab} showTab={showTab} />
              <Footer />
            </div>
          } />
          <Route path="/about" element={<div><AboutUs /><Footer /></div>} />
          <Route path="/register" element={<div><RegistrationForm /><Footer /></div>} />
          {/* Dynamic route for Plan component */}
          <Route path="/plan/:eventId" element={<Plan />} />
          <Route path="/caters/:eventId" element={<Caterers />} />
          <Route path="/Loginform" element={<div><LoginForm /><Footer /></div>} /> {/* New Route for Login */}
          <Route path='/elegant' element={<Elegantevents/>}></Route>
          {/* {/<Route path='/dream' element={<Dreamweddings/>}></Route>/} */}
          <Route path='/party' element={<Partymagic/>}></Route> 
          <Route path='/corporate' element={<CorporateCreations/>}></Route> 
          <Route path='/glamor' element={<GlamorousGatherings/>}></Route> 
          <Route path='/sun' element={<SunshineEvents/>}></Route> 
          <Route path='/maj' element={<MajesticMemories/>}></Route> 
          <Route path='/fie' element={<FiestaFun/>}></Route> 
          <Route path='/Royal' element={<RoyalReceptions/>}></Route> 
          <Route path='/vibe' element={<VibrantVibes/>}></Route> 
          <Route path="/halls/:eventId" element={<Halls/>}/>
        </Routes>
      </div>
    </Router>
  );
};

const Header = ({ onFetchLocation, area, errorMessage }) => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '10px 20px', 
      backgroundColor: '#000000', // Header background color
      color: '#ffffff' // Text color
    }}>
      <div className="logo">Event Planner</div>
      <nav>
        <Link to="/" style={{ color: '#ffffff', margin: '0 15px' }}>Home</Link>
        <Link to="/about" style={{ color: '#ffffff', margin: '0 15px' }}>About Us</Link>
        <Link to="/register" style={{ color: '#ffffff', margin: '0 15px' }}>Register</Link>
        <Link to="/Loginform">Login</Link>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Search..." 
          style={{
            padding: '10px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '2px solid #4a90e2', // Vibrant border color
            backgroundColor: '#f0f8ff', // Light vibrant background color
            width: '200px', // Adjust width of search bar
            transition: 'border-color 0.3s, background-color 0.3s',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#007bff'; // Darker border on focus
            e.target.style.backgroundColor = '#e6f7ff'; // Slightly darker background on focus
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#4a90e2'; // Reset border color
            e.target.style.backgroundColor = '#f0f8ff'; // Reset background color
          }}
        />
        <button 
          onClick={onFetchLocation} 
          style={{ 
            padding: '5px 8px', 
            cursor: 'pointer', 
            backgroundColor: '#ffffff', 
            color: '#4a90e2', 
            border: 'none', 
            borderRadius: '5px', 
            transition: 'background-color 0.3s', 
            fontSize: '14px', 
            width: '100px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e1e1e1'} 
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        >
          My Location
        </button>
        <div style={{ marginLeft: '30px' }}>
          {area && <p style={{ margin: 0 }}>Area: {area}</p>} 
          {errorMessage && <p style={{ margin: 0, color: 'red' }}>{errorMessage}</p>} 
        </div>
      </div>
    </header>
  );
};



const Main = ({ activeTab, showTab }) => {
  return (
    <main>
      <div className="tab-buttons">
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => showTab('events')}>
          Events
        </button>
        <button className={activeTab === 'caterers' ? 'active' : ''} onClick={() => showTab('caterers')}>
          Caterers
        </button>
        <button className={activeTab === 'function-halls' ? 'active' : ''} onClick={() => showTab('function-halls')}>
          Function Halls
        </button>
      </div>

      {activeTab === 'events' && <EventsSection />}
      {activeTab === 'caterers' && <CaterersSection />}
      {activeTab === 'function-halls' && <FunctionHallsSection />}
    </main>
  );
};

const EventsSection = () => {
  return (
    <div>
      <h1 className="title">Plan Your Perfect Event</h1>
      <div className="event-grid">
        {eventData.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};



 const EventCard = ({ event }) => {
   return (
     <div className="event-card">
       <img src={event.image} alt={event.title} />
       <div className="content">
         <h3>{event.title}</h3>
         <p>{event.description}</p>
         {/* Open Plan in a new tab */}
         <Link to={`/plan/${event.id}`}>View Details</Link>
       </div>
     </div>
   );
 };







 const CaterersSection = () => {
     return (
         <div>
             <h1 className="title">Find the Best Caterers</h1>
             <div className="caterer-grid">
                 {catererData.map((caterer) => (
                     <CatererCard key={caterer.id} caterer={caterer} />
                 ))}
             </div>
         </div>
     );
 };

 const CatererCard = ({ caterer }) => {
   return (
     <div className="caterer-card">
       <img src={caterer.image} alt={caterer.name} />
       <div className="content">
         <h3>{caterer.name}</h3>
         <p>{caterer.description}</p>
         {/* Correct string interpolation for the Link's to attribute */}
         <Link to={`/caters/${caterer.id}`}>View Details</Link>

       </div>
     </div>
   );
 };


 const FunctionHallsSection = () => {
  return (
    <div>
      <h1 className="title">Discover Function Halls</h1>
      <div className="function-hall-grid">
        {functionHallData.map((hall) => (
          <FunctionHallCard key={hall.id} hall={hall} />
        ))}
      </div>
    </div>
  );
};

const FunctionHallCard = ({ hall }) => {
  return (
    <div className="function-hall-card">
      <img src={hall.image} alt={hall.name} />
      <div className="content">
        <h3>{hall.name}</h3>
        <p>{hall.description}</p>
        <Link to={`/halls/${hall.id}`}>View Details</Link>
      </div>
  </div>
);
};
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Event Planner. All Rights Reserved.</p>
        </footer>
    );
};

const eventData = [
  { id: 1, image: 'https://tse2.mm.bing.net/th?id=OIP.NBQJbQmFD85lm4-7dSWmoQHaE9&pid=Api&P=0&h=220', title: 'Birthday Party', description: 'Make your birthday memorable with our creative and fun ideas.', detailsLink: '/event-details' },
  { id: 2, image: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.webp?a=1&b=1&s=612x612&w=0&k=20&c=6IXyY17ba4WBS96lAIhNOfOAiuG-s-iFfOtyjjLCwEE=', title: 'Weddings', description: 'Plan the perfect wedding with us. From decor to catering, we cover it all.', detailsLink: '/event-details' },
  { id: 3, image: 'https://tse1.mm.bing.net/th?id=OIP.FWbFDMhofCx6N2pjHUV6qAHaE7&pid=Api&P=0&h=220', title: 'Haldi', description: 'Celebrate the haldi ceremony with vibrant decorations and services.', detailsLink: '/event-details' },
  { id: 4, image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZXZlbnRzfGVufDB8fDB8fHww ', title: 'Office Events', description: 'Host professional office parties with top-tier planning.', detailsLink: '/event-details' },
  { id: 5, image: 'https://tse3.mm.bing.net/th?id=OIP.0RzLVH0bgK3-R90z6Tu9jQHaE8&pid=Api&P=0&h=220', title: 'Pooja Ceremonies', description: 'Our team will ensure your religious ceremonies are flawless.', detailsLink: '/event-details' },
  { id: 6, image: 'https://tse1.mm.bing.net/th?id=OIP.85fYulUQd_tTrGuLtNyYDwHaE7&pid=Api&P=0&h=220', title: 'Naming Ceremony', description: 'We make naming ceremonies joyful and memorable for all guests.', detailsLink: '/event-details' },
  { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.VOcHJTMODZf5XLY13w_QMQHaGc&pid=Api&P=0&h=220', title: 'Half Saree Functions', description: 'Make your moments memorable with our rich culture and tradition.', detailsLink: '/event-details' },
  { id: 8, image: 'https://tse4.mm.bing.net/th?id=OIP.j8T4iFD4Rzjft69r-KXcxgHaFj&pid=Api&P=0&h=220', title: 'Sangeet', description: 'Plan the perfect sangeeth with us to make your memories colourful.', detailsLink: '/event-details' },
 ];

 const catererData = [
  { 
    id: 1, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s', 
    name: 'Gourmet Delights', 
    description: 'Exceptional catering services for all types of events.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 2, 
    image: 'https://tse3.mm.bing.net/th?id=OIP.Fb77FO0tw-7GqLv0C9anLgHaHa&pid=Api&P=0&h=220', 
    name: 'Savory Bites', 
    description: 'A perfect blend of flavor and presentation for your events.', 
    detailsLink: '/caterer-details' 
  },
  
  { 
    id: 3, 
    image: 'https://png.pngtree.com/element_our/png_detail/20180918/chef-cooking-fried-chicken-and-delicious-sign-png_103460.jpg', 
    name: 'Delicious Eats', 
    description: 'Providing high-quality catering services for any occasion.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 4, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwZrX0lrynh9jhVhNTVXXib5R2dcpLh5Skmw&s', 
    name: 'Fiesta Flavors', 
    description: 'Vibrant and festive dishes that bring excitement to your event.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 5, 
    image: 'https://cdn3.f-cdn.com/contestentries/1466956/32884888/5c4979148ee87_thumb900.jpg', 
    name: 'Taste Buds', 
    description: 'Specializing in gourmet dishes for your events.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 6, 
    image: 'https://tse4.mm.bing.net/th?id=OIP.BpYzJsvQ71Eianu8GLxX6AHaHa&pid=Api&P=0&h=220', 
    name: 'Perfect Plates', 
    description: 'Fine dining catering for weddings and corporate events.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 7, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.RrYfpPoNGFkxiC9FbdrANgHaHa&pid=Api&P=0&h=220', 
    name: 'Bulakasfalo', 
    description: 'Innovative menus that showcase fresh ingredients and creativity.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 8, 
    image: 'https://tse4.mm.bing.net/th?id=OIP.ozXIUvr7aXhLYD1KwMEL7gHaHa&pid=Api&P=0&h=220', 
    name: 'Urban Feast', 
    description: 'A modern catering service bringing the best of city flavors to your events.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 9, 
    image: 'https://tse3.mm.bing.net/th?id=OIP.86Jz2Ec31ZLcnmlbJfjGpwHaHa&pid=Api&P=0&h=220', 
    name: 'Flavor Town', 
    description: 'Diverse cuisines to cater to all your event needs.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 10, 
    image: 'https://tse1.mm.bing.net/th?id=OIP.rKRqmxK-9cTA6G696uy8ggHaHa&pid=Api&P=0&h=220', 
    name: 'Bistro Bliss', 
    description: 'Gourmet catering with a focus on local and seasonal ingredients.', 
    detailsLink: '/caterer-details' 
  },
  { 
    id: 11, 
    image: 'https://tse4.mm.bing.net/th?id=OIP.Xk9j6zjUYkJhYZAHkWuL2AHaHa&pid=Api&P=0&h=220', 
    name: 'The Foodies Haven', 
    description: 'Comfort food catering that brings warmth to your events.', 
    detailsLink: '/caterer-details' 
  },
  
  { 
    id: 12, 
    image: 'https://tse2.mm.bing.net/th?id=OIP.YOvH4gdyhBdFbPnnDJPMWAAAAA&pid=Api&P=0&h=220', 
    name: 'Rustic Table', 
    description: 'Farm-to-table catering emphasizing fresh and organic ingredients.', 
    detailsLink: '/caterer-details' 
  },
];


const functionHallData = [
  { id: 1, image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grand-hotel-logo-design-template-50c7255579b1e9df6d8bae41f78889c1_screen.jpg?ts=1611148225', name: 'Hotel Grand', description: 'A spacious hall ideal for large events and gatherings.', detailsLink: '/hall-details' },
  { id: 2, image: 'https://tse4.mm.bing.net/th?id=OIP.8_1_TQjjwn1-wFCRy_FiGgHaFj&pid=Api&P=0&h=220', name: 'Aurora', description: 'An elegant venue for your sophisticated events.', detailsLink: '/hall-details' },
  { id: 3, image: 'https://img.freepik.com/free-vector/letter-r-royal-luxury-logo-your-brand_1017-27683.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid', name: 'Royal Space', description: 'Experience luxury with our royal function space.', detailsLink: '/hall-details' },
  { id: 4, image: 'https://img.freepik.com/premium-vector/garden-logo-vector_848918-13537.jpg', name: 'Garden Pavilion', description: 'Charming outdoor space for a unique and memorable event.', detailsLink: '/hall-details' },
  { id: 5, image: 'https://biz.prlog.org/CityView/logo.jpg', name: 'City View Hall', description: 'A modern hall with stunning views of the city skyline.', detailsLink: '/hall-details' },
  { id: 6, image: 'https://tse2.mm.bing.net/th?id=OIP.C5NlePLMk45JNslm2VjmewAAAA&pid=Api&P=0&h=220', name: 'Banquet Bliss', description: 'Perfect for weddings and grand celebrations.', detailsLink: '/hall-details' },
  { id: 7, image: 'https://tse3.mm.bing.net/th?id=OIP.g75Gw9reUsBH_Gbxy10XvAAAAA&pid=Api&P=0&h=220', name: 'The Grand Ballroom', description: 'An expansive ballroom for large parties and receptions.', detailsLink: '/hall-details' },
  { id: 8, image: 'https://tse3.mm.bing.net/th?id=OIP.UD63tehlPlIg1ugpA11COQHaHy&pid=Api&P=0&h=220', name: 'Luxury Lounge', description: 'A sophisticated lounge for intimate gatherings.', detailsLink: '/hall-details' },
  { id: 9, image: 'https://tse2.mm.bing.net/th?id=OIP.JayVfy01HNHlPiA9thbwrAAAAA&pid=Api&P=0&h=220', name: 'Cozy Corner Hall', description: 'A warm and inviting space for small events.', detailsLink: '/hall-details' },
  { id: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.YR23ObXbHW86k3ssJo9ELwHaHa&pid=Api&P=0&h=220', name: 'Seaside Venue', description: 'A picturesque venue by the sea, perfect for outdoor weddings.', detailsLink: '/hall-details' },
  { id: 11, image: 'https://tse2.mm.bing.net/th?id=OIP.QyZvdVcmPZ01zkVK8JKddwAAAA&pid=Api&P=0&h=220', name: 'Heritage Hall', description: 'Experience the charm of history in a beautiful setting.', detailsLink: '/hall-details' },
  { id: 12, image: 'https://tse4.mm.bing.net/th?id=OIP.6-osWWFpuDtUt4RfdNSIRAHaFj&pid=Api&P=0&h=220', name: 'Imperal Hotel', description: 'A rooftop venue with breathtaking views for your special events.', detailsLink: '/hall-details' },
];




export default App;
