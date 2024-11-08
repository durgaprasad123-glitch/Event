import React from 'react';
import './Partymagic.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Party Magic</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Party Magic</h2>
                <p>
                    Party Magic is your go-to event planning company dedicated to creating magical moments for all occasions. Whether it's a birthday bash or a grand wedding, we ensure every detail is perfect. With over 300 successful events, our team is ready to make your dream event a reality!
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.QzgQEAzqNzLma0Eoggcw0QHaE8&pid=Api&P=0&h=220" alt="Birthday Party" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse3.mm.bing.net/th?id=OIP._Wsq5PW2jALTBCtokrpnhQHaE7&pid=Api&P=0&h=220" alt="Wedding Decoration" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.TOVBNghqGtFgnTKf0YoOSQHaE8&pid=Api&P=0&h=220" alt="Corporate Event" />
                </div>
                
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Emily Brown</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>Party Magic turned my daughter’s birthday into a fairy tale! The decorations and activities were just perfect. Highly recommend!</p>
                </div>

                <div className="review-box">
                    <h3>Michael Johnson</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>Great service! The team was professional, and everything went smoothly. Just a slight delay in setup, but overall a fantastic experience!</p>
                </div>

                {/* Add more reviews here */}
            </div>

            {/* Add a Review Section */}
            <div className="review-form">
                <h2>Write a Review</h2>
                <form action="/submit-review" method="post">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label htmlFor="rating">Rating</label>
                    <select id="rating" name="rating" required>
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="1">★☆☆☆☆</option>
                    </select>

                    <label htmlFor="review">Review</label>
                    <textarea id="review" name="review" placeholder="Write your review" rows="4" required></textarea>

                    <button type="submit">Submit Review</button>
                </form>
            </div>

            {/* Contact Section */}
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <div className="contacts">
                <a href="tel:+1234567890">📞 Call</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            </div>
        </div>
    );
};

export default Profile;
