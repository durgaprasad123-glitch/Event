import React from 'react';
import './SunshineEvents.css';
import { useNavigate } from 'react-router-dom';

const SunshineEvents = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Sunshine Events</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Sunshine Events</h2>
                <p>
                    Sunshine Events brings brightness and joy to all kinds of celebrations. From intimate gatherings to grand corporate functions, we ensure that every detail is perfect and filled with positive energy.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://example.com/sunshine1.jpg" alt="Beach Wedding" />
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/sunshine2.jpg" alt="Corporate Event Setup" />
                </div>
                <div className="gallery-item">
                    <video controls style={{ width: '100%', height: 'auto' }}>
                        <source src="https://example.com/event_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/sunshine3.jpg" alt="Outdoor Party" />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Emily Williams</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>Sunshine Events made our beach wedding a dream. The decorations were stunning, and the team was professional. Highly recommended!</p>
                </div>

                <div className="review-box">
                    <h3>Michael Brown</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>Our corporate event was a success thanks to Sunshine Events. The planning was seamless, although there was a minor issue with sound. Still, a great experience overall!</p>
                </div>
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

            {/* Back Button */}
            <div className="back-button">
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
};

export default SunshineEvents;
