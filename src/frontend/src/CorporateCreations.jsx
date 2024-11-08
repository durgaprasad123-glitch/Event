import React from 'react';
import './CorporateCreations.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Corporate Creations</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Corporate Creations</h2>
                <p>
                    Corporate Creations is a leading event planning company specializing in corporate events, conferences, and seminars. Our dedicated team ensures that your event reflects your brand and exceeds your expectations. With a proven track record of successful events, we take pride in our attention to detail and exceptional service.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.8AcvpGR_2xdQO7M9O0GwTwAAAA&pid=Api&P=0&h=220" alt="Corporate Event 1" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.bXWx4wAZ14dsGEiPPIE3FQHaE8&pid=Api&P=0&h=220" alt="Corporate Event 2" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.I2ypEFd9Q3Yqij7R6RxQYgHaE8&pid=Api&P=0&h=220" alt="Corporate Event 3" />
                </div>
                
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Sarah Thompson</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>Corporate Creations made our annual conference a resounding success! The organization was impeccable, and the venue was stunning. Highly recommend!</p>
                </div>

                <div className="review-box">
                    <h3>David Wilson</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>Great experience! The team was professional, and everything went according to plan. Just a few minor hiccups, but overall a great job!</p>
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
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            </div>
        </div>
    );
};

export default Profile;
