import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the catererId
import './App.css';

function Cater() {
  const [catererDetails, setCatererDetails] = useState(null); // Caterer details state

  const { eventId } = useParams(); // Get the caterId from the URL
  console.log("Caterer ID from URL:", eventId); // For debugging purposes

  // Sample caterers array
  const caterers = [
    {
      id: 1,
      name: 'Gourmet Delights',
      description: 'Exceptional catering services for all types of events.',
      steps: [
        'Schedule an initial consultation',
        'Discuss event details and preferences',
        'Customize menu based on client needs',
        'Prepare and cook high-quality dishes',
        'Deliver and elegantly set up the food station',
        'Conduct post-event clean-up and feedback session'
      ],
      menu: 'Standard Menu: Shrimp Scampi, Caesar Salad, Garlic Bread, Grilled Chicken, Roasted Vegetables',
      specialMenu: 'Signature Shrimp Scampi, Lobster Mac and Cheese, Truffle Mashed Potatoes, Filet Mignon with Béarnaise Sauce',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s',
    },
    {
      id: 2,
      name: 'Savory Bites',
      description: 'A perfect blend of flavor and presentation for your events.',
      steps: [
        'Conduct a personalized consultation',
        'Evaluate guest preferences and dietary needs',
        'Design a tailored menu and timeline',
        'Prepare dishes with fresh ingredients',
        'Set up the catering area with style',
        'Follow up with the client for feedback and satisfaction'
      ],
      menu: 'Standard Menu: Beef Wellington, Roasted Asparagus, Caesar Salad, Rosemary Potatoes',
      specialMenu: 'Seared Scallops, Lamb Chops with Mint Jus, Lobster Risotto, Chocolate Soufflé',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi67gEDX54OfFRFFLSK3Y9SI9nOfjYWBE5A&s',
    },
    {
      id: 3,
      name: 'Delicious Eats',
      description: 'Providing high-quality catering services for any occasion.',
      steps: [
        'Initiate an initial consultation meeting',
        'Collect detailed information about the event',
        'Craft a personalized menu selection',
        'Cook and prepare food with care',
        'Deliver and set up beautifully',
        'Conduct a post-event review and clean-up'
      ],
      menu: 'Standard Menu: Grilled Salmon, Quinoa Salad, Roasted Brussel Sprouts, Garlic Bread',
      specialMenu: 'Braised Short Ribs, Duck à l’Orange, Truffle Pasta, Lava Cake',
      image: 'https://www.shutterstock.com/image-vector/fresh-food-typography-logo-design-260nw-2179101939.jpg',
    },
    {
      id: 4,
      name: 'Fiesta Flavors',
      description: 'Vibrant and festive dishes that bring excitement to your event.',
      steps: [
        'Arrange an initial consultation',
        'Explore client preferences and themes',
        'Create a vibrant menu tailored to the event',
        'Prepare food using authentic recipes',
        'Present and serve with flair',
        'Engage with clients for feedback and follow-up'
      ],
      menu: 'Standard Menu: Chicken Enchiladas, Mexican Rice, Guacamole, Chips & Salsa',
      specialMenu: 'Shrimp Tacos, Carne Asada, Queso Fundido, Churros with Chocolate Sauce',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPwfIZm9A0gpHbRXvMhL6Jhp-wKYVEvRfKA&s',
    },
    {
      id: 5,
      name: 'Taste Buds',
      description: 'Specializing in gourmet dishes for your events.',
      steps: [
        'Schedule a consultation to discuss your needs',
        'Assess dietary restrictions and preferences',
        'Curate a menu of gourmet selections',
        'Prepare dishes with premium ingredients',
        'Set up an attractive food display',
        'Follow up with clients to ensure satisfaction'
      ],
      menu: 'Standard Menu: Herb-Roasted Chicken, Grilled Vegetables, Caesar Salad, Garlic Bread',
      specialMenu: 'Lobster Tail with Garlic Butter, Kobe Beef Sliders, Truffle Fries, Chocolate Ganache Tart',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s',
    },
    {
      id: 6,
      name: 'Perfect Plates',
      description: 'Fine dining catering for weddings and corporate events.',
      steps: [
        'Conduct an in-depth initial consultation',
        'Identify event style and catering requirements',
        'Develop a bespoke menu',
        'Cook and present dishes elegantly',
        'Deliver with care and professionalism',
        'Gather client feedback for continuous improvement'
      ],
      menu: 'Standard Menu: Grilled Chicken Caesar Wraps, Penne Alfredo, Garlic Breadsticks, Seasonal Fruit Salad',
      specialMenu: 'Grilled Lobster Tail, Duck Confit, Wild Mushroom Risotto, Creme Brûlée',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi67gEDX54OfFRFFLSK3Y9SI9nOfjYWBE5A&s',
    },
    {
      id: 7,
      name: 'Bulakasfalo',
      description: 'Innovative menus that showcase fresh ingredients and creativity.',
      steps: [
        'Arrange a detailed consultation',
        'Discuss creative menu ideas with clients',
        'Design an innovative menu to fit the theme',
        'Prepare food with fresh, high-quality ingredients',
        'Set up a unique presentation',
        'Engage with guests for an interactive experience'
      ],
      menu: 'Standard Menu: Grilled Vegetable Skewers, Feta Salad, Saffron Rice, Chicken Souvlaki',
      specialMenu: 'Lamb Gyros, Spanakopita, Moussaka, Baklava with Pistachios',
      image: 'https://www.shutterstock.com/image-vector/fresh-food-typography-logo-design-260nw-2179101939.jpg',
    },
    {
      id: 8,
      name: 'Urban Feast',
      description: 'A modern catering service bringing the best of city flavors to your events.',
      steps: [
        'Book an initial consultation to discuss themes',
        'Identify culinary preferences and styles',
        'Create a modern and trendy menu',
        'Prepare and serve food with attention to detail',
        'Set up an urban-inspired food station',
        'Follow up for feedback and future events'
      ],
      menu: 'Standard Menu: BBQ Ribs, Mac and Cheese, Coleslaw, Cornbread',
      specialMenu: 'Korean BBQ Short Ribs, Kimchi Fried Rice, Pork Belly Bao Buns, Matcha Ice Cream',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPwfIZm9A0gpHbRXvMhL6Jhp-wKYVEvRfKA&s',
    },
    {
      id: 9,
      name: 'Flavor Town',
      description: 'Diverse cuisines to cater to all your event needs.',
      steps: [
        'Schedule a consultation to learn your needs',
        'Discuss dietary preferences and cuisines',
        'Design a diverse menu to fit all tastes',
        'Prepare and serve dishes with passion',
        'Set up the dining area for maximum impact',
        'Solicit feedback to enhance future catering'
      ],
      menu: 'Standard Menu: Grilled Chicken, Couscous Salad, Mediterranean Hummus Platter, Pita Bread',
      specialMenu: 'Lamb Shawarma, Falafel with Tahini, Stuffed Grape Leaves, Baklava',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaL1cnX7jblIwb74NuPY2UTsajYV0W7Mo6w&s',
    },
    {
      id: 10,
      name: 'Bistro Bliss',
      description: 'Gourmet catering with a focus on local and seasonal ingredients.',
      steps: [
        'Conduct an initial consultation to understand needs',
        'Evaluate local ingredient availability',
        'Create a menu highlighting seasonal dishes',
        'Prepare gourmet meals with care',
        'Set up with an elegant presentation',
        'Gather client feedback for future improvements'
      ],
      menu: 'Standard Menu: Roasted Duck Breast, Seasonal Vegetables, Wild Rice Pilaf, Fresh Baked Bread',
      specialMenu: 'Pan-Seared Sea Bass, Butternut Squash Soup, Wagyu Beef Tartare, Chocolate Mousse',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXi67gEDX54OfFRFFLSK3Y9SI9nOfjYWBE5A&s',
    },
    {
      id: 11,
      name: 'The Foodies Haven',
      description: 'Comfort food catering that brings warmth to your events.',
      steps: [
        'Arrange a consultation to discuss your vision',
        'Identify comfort food favorites and dietary needs',
        'Design a menu that embodies warmth and comfort',
        'Prepare dishes from scratch with love',
        'Serve with care and attention to detail',
        'Follow up to ensure satisfaction and gather feedback'
      ],
      menu: 'Standard Menu: Grilled Cheese Sandwich, Tomato Soup, Fried Chicken, Mashed Potatoes',
      specialMenu: 'Beef Brisket, Mac and Cheese, Smoked Pulled Pork Sandwich, Pecan Pie',
      image: 'https://www.shutterstock.com/image-vector/fresh-food-typography-logo-design-260nw-2179101939.jpg',
    },
    {
      id: 12,
      name: 'Rustic Table',
      description: 'Farm-to-table catering emphasizing fresh and organic ingredients.',
      steps: [
        'Conduct an initial meeting to assess needs',
        'Identify local and seasonal ingredients',
        'Design a farm-to-table menu that showcases freshness',
        'Prepare food in a rustic style',
        'Set up with an inviting and natural presentation',
        'Engage clients for post-event feedback and future bookings'
      ],
      menu: 'Standard Menu: Roasted Turkey, Cranberry Sauce, Herb Stuffing, Grilled Asparagus',
      specialMenu: 'Grass-Fed Beef Tenderloin, Heirloom Tomato Salad, Wild Mushroom Risotto, Lemon Tart',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPwfIZm9A0gpHbRXvMhL6Jhp-wKYVEvRfKA&s',
    }
  ];
  

  // Find the caterer based on the catererId from the URL
  const selectedCaterer = caterers.find(caterer => caterer.id === parseInt(eventId)); // Ensure ID is integer

  // Handle form submission logic here
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
  };

  if (!selectedCaterer) {
    return <div>No caterer found!</div>; // Handle case where caterer is not found
  }

  return (
    <div className="App">
      <main>
        <h1 className="title">Find Catering Services</h1>

        {/* Caterer details and form */}
        <div id="details" className="tab-content">
          <div className="caterer-details">
            <h2>{selectedCaterer.name}</h2>
            <p>{selectedCaterer.description}</p>

            <h3>Menu:</h3>
            <p>{selectedCaterer.menu}</p>

            <h3>Special Menu:</h3>
            <p>{selectedCaterer.specialMenu}</p>

            <h3>Steps:</h3>
            <ul>
              {selectedCaterer.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Catering Form */}
          <div className="details-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="numPersons">Number of Persons:</label>
              <input type="number" id="numPersons" placeholder="Enter number of persons" required />

              <label htmlFor="menuDetails">Menu:</label>
              <textarea id="menuDetails" rows="4" placeholder="Enter menu details" required></textarea>

              <label htmlFor="specialMenuDetails">Special Menu:</label>
              <textarea id="specialMenuDetails" rows="4" placeholder="Enter special menu details"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Event Planner & Catering Services</p>
      </footer>
    </div>
  );
}

export default Cater;
