import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GlamorousGatherings.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Glamorous Gatherings</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Glamorous Gatherings</h2>
                <p>
                    Glamorous Gatherings is known for organizing high-end, glamorous events with unmatched creativity and style. Whether it's a luxury wedding, a chic corporate event, or a lavish private party, our team brings your vision to life with elegance and attention to detail. 
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.otS3IzY8-syuglAP-3CtbwHaE8&pid=Api&P=0&h=220" alt="Luxury Wedding" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.KSz0Tt3-g-tk4XegkrO0gwHaE8&pid=Api&P=0&h=220" alt="Corporate Gala" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.zdalrRlCOYS1s2zmykcTzAHaE4&pid=Api&P=0&h=220" alt="VIP Party" />
                </div>
                <div className="gallery-item">
                    <br></br>
                </div>
                
                <div className="gallery-item">
                    <iframe 
                        width="100%" 
                        height="auto" 
                        src="https://www.youtube.com/embed/XVwHLwZrIYk?si=CHSEOoQwqrZ-qJF6" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Alice Johnson</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>The most glamorous wedding I've ever seen! Glamorous Gatherings exceeded our expectations and delivered a magical experience. Highly recommended!</p>
                </div>

                <div className="review-box">
                    <h3>Michael Davis</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>A fantastic corporate event! The theme was on point, and the decorations were stunning. Just a small issue with the sound system, but overall, a great job!</p>
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
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            </div>
        </div>
    );
};

export default Profile;
