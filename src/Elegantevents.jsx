import React from 'react';
import './Elegentevent.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Elegant Events</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Elegant Events</h2>
                <p>
                    Elegant Events is a premium event planning company specializing in sophisticated and elegant celebrations. From weddings to corporate functions, we deliver top-notch services with a personal touch. We have a 5-star rating for over 500 successfully executed events.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Work Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://i0.wp.com/chintupartyandevents.in/wp-content/uploads/2023/05/Adults-Birthday-Party-Decoration-In-Bangalore.jpg?fit=1079%2C1079&ssl=1" alt="Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO7V9sK_mOxrnS77Bj2cpriPltlQwtY0w7w&s" alt="Corporate Event" />
                </div>
                <div className="gallery-item">
                    <video controls style={{ width: '100%', height: 'auto' }}>
                        <source src="C:/Users/HP/Downloads/WhatsApp Video 2024-09-13 at 7.16.00 PM.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="gallery-item">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/577/410/desktop-wallpaper-ajf-wedding-event-management-nalan-sg-event-management.jpg" alt="Luxury Party" />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>John Doe</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>Elegant Events truly made our wedding a dream come true! The attention to detail and the professionalism was unparalleled. Highly recommend!</p>
                </div>

                <div className="review-box">
                    <h3>Jane Smith</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>Great experience with Elegant Events. The decor was beautiful, although the catering could have been improved. Still, a fantastic event overall!</p>
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
