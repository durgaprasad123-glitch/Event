import React from 'react';
import './RoyalReceptions.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Royal Receptions</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Royal Receptions</h2>
                <p>
                    At Royal Receptions, we pride ourselves on crafting luxurious and timeless events. From regal weddings to exclusive soirées, we handle every detail with elegance and finesse. With a portfolio of over 300 high-end events, Royal Receptions guarantees an experience fit for royalty.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 className="gallery-title">Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.Izx3g4Sj2hX5E3EYfQKLygHaEK&pid=Api&P=0&h=220" alt="Royal Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.pZCO5c4WBzJ_kkJ77_XF7wHaEK&pid=Api&P=0&h=220" alt="Grand Ballroom" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.ddnldnUPuUUzHraIZH510QHaEK&pid=Api&P=0&h=220" alt="Luxury Dining Experience" />
                </div>
               
            </div>

            {/* YouTube Video Section */}
            <div className="youtube-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/mPeStYrhFlQ?si=lQhm1m_W1OIs7RX6"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Michael Thompson</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>
                        Royal Receptions turned our dream wedding into reality. From the breathtaking décor to the exceptional service, every detail was perfect!
                    </p>
                </div>

                <div className="review-box">
                    <h3>Sarah Williams</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>
                        Amazing experience overall. The venue looked stunning, though we had a slight delay with the catering. Nevertheless, the day was spectacular!
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
