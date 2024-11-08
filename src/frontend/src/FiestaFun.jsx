import React from 'react';
import './FiestaFun.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Fiesta Fun</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Fiesta Fun</h2>
                <p>
                    Fiesta Fun is your go-to event planner for lively and vibrant celebrations! From birthdays to themed parties and festivals, we infuse joy and excitement into every event. With over 200 events successfully planned, we are experts in crafting memorable and fun-filled experiences for all ages.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 className="gallery-title">Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://i.pinimg.com/originals/e2/9a/0a/e29a0a9e65ff1d326a348ca0872b35d2.jpg" alt="Birthday Party Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.YhxP4aKyUL0rJ3IeJs7fsAHaE7&pid=Api&P=0&h=220" alt="Themed Event" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.Wu29YuY-VbBfMx1CUQZBZAHaE8&pid=Api&P=0&h=220" alt="Festival Fun" />
                </div>
                
            </div>

            {/* YouTube Video Section */}
            <div className="youtube-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0EkxKdXOqLQ?si=6YbsDxjbNJmaaEBi"
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
                    <h3>Emily Clark</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>
                        Fiesta Fun brought so much energy to our kid's birthday party. The themed decorations and activities were perfect. We will definitely hire them again!
                    </p>
                </div>

                <div className="review-box">
                    <h3>Tom Anderson</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>
                        Great event! The planning and coordination were smooth, though a few minor hiccups with timing. Overall, an amazing party experience!
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
