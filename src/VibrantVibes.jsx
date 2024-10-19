import React from 'react';
import './VibrantVibes.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Vibrant Vibes</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Vibrant Vibes</h2>
                <p>
                    Vibrant Vibes is your go-to event planning company for lively and colorful celebrations. From vibrant weddings to dynamic corporate events, we create unforgettable experiences filled with energy and excitement. With over 400 events successfully executed, we bring joy to every occasion.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 className="gallery-title">Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://example.com/vibrant-wedding.jpg" alt="Vibrant Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/colorful-party.jpg" alt="Colorful Party" />
                </div>
                <div className="gallery-item">
                    <video controls className="gallery-video">
                        <source src="https://example.com/vibrant-event-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/fun-corporate-event.jpg" alt="Fun Corporate Event" />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Emily Johnson</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>
                        Vibrant Vibes turned our birthday party into a colorful festival! The decorations and entertainment were beyond our expectations. Highly recommend!
                    </p>
                </div>

                <div className="review-box">
                    <h3>David Brown</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>
                        Great service and atmosphere! The team was very professional, though I wished the food selection had more options. Overall, a fantastic experience!
                    </p>
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
            <h2 className="contact-title">Contact Us</h2>
            <div className="contacts">
                <a href="tel:+1234567890">📞 Call</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            </div>
        </div>
    );
};

export default Profile;
