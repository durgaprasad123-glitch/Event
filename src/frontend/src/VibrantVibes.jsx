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
                    <img src="https://tse4.mm.bing.net/th?id=OIP.YqcXfUyZcNy9mh1x7z9w1wHaE6&pid=Api&P=0&h=220" alt="Vibrant Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.INgncJRT10g2FfEonBDipQHaE8&pid=Api&P=0&h=220" alt="Colorful Party" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.l6EEvwOQB2JkETMCYOe3mQHaE8&pid=Api&P=0&h=220" alt="Fun Corporate Event" />
                </div>
                
            </div>

            {/* YouTube Video Section */}
            <div className="youtube-video">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_SnjP6VcmLQ?si=t60VoQm08oL_KnI0"
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
