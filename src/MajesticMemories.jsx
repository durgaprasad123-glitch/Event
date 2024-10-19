import React from 'react';
import './MajesticMemories.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Majestic Memories</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Majestic Memories</h2>
                <p>
                    Majestic Memories specializes in curating unforgettable moments for weddings, parties, and corporate events. With a keen eye for detail, we bring your dream events to life, ensuring every moment is a majestic memory. With over 300 events successfully executed, we are known for our creative touch and precision.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 className="gallery-title">Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://example.com/majestic-wedding.jpg" alt="Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/corporate-event.jpg" alt="Corporate Event" />
                </div>
                <div className="gallery-item">
                    <video controls className="gallery-video">
                        <source src="https://example.com/event-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="gallery-item">
                    <img src="https://example.com/luxury-party.jpg" alt="Luxury Party" />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Michael Lee</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>
                        Majestic Memories transformed our corporate event into a spectacular experience. The professionalism and attention to detail were impeccable.
                    </p>
                </div>

                <div className="review-box">
                    <h3>Sarah Brown</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>
                        The decor and planning were stunning, but the catering could have been a bit more personalized. Overall, a memorable experience.
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
