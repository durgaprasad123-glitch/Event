import React from 'react';
import './RandomWeddings.css';

const Profile = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="header">
                <h1>Random Weddings</h1>
            </div>

            {/* About Company Section */}
            <div className="about-company">
                <h2>About Random Weddings</h2>
                <p>
                    Random Weddings is a premier event planning company, specializing in personalized and unforgettable wedding experiences. With over 300 successful weddings, we ensure your special day is as magical as you've always dreamed of.
                </p>
            </div>

            {/* Work Gallery Section */}
            <h2 style={{ textAlign: 'center' }}>Our Wedding Gallery</h2>
            <div className="planner-gallery">
                <div className="gallery-item">
                    <img src="https://i.pinimg.com/736x/5b/34/6d/5b346d32dc19e16a89e2a540f8d8e3e4--indian-weddings-rituals-indian-bride-groom.jpg" alt="Traditional Indian Wedding" />
                </div>
                <div className="gallery-item">
                    <img src="https://www.weddingwishlist.com/wedding-board/wp-content/uploads/2018/10/3-4-1068x713.jpg" alt="Western Style Wedding" />
                </div>
                <div className="gallery-item">
                    <video controls style={{ width: '100%', height: 'auto' }}>
                        <source src="C:/Users/HP/Downloads/WeddingHighlights.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="gallery-item">
                    <img src="https://cdn0.weddingwire.in/article/0083/3_2/960/jpg/51633-indian-wedding-stage-backdrop-ideas-2019.jpeg" alt="Luxury Wedding Setup" />
                </div>
            </div>

            {/* Customer Reviews Section */}
            <div className="reviews">
                <h2>Customer Reviews</h2>
                <div className="review-box">
                    <h3>Rahul Patel</h3>
                    <p className="ratings">Rating: ★★★★★</p>
                    <p>The Random Weddings team exceeded our expectations! From decor to organization, everything was flawless. Highly recommended for your dream wedding!</p>
                </div>

                <div className="review-box">
                    <h3>Anita Desai</h3>
                    <p className="ratings">Rating: ★★★★☆</p>
                    <p>The wedding was beautiful, but there were some delays with the catering. Otherwise, a wonderful experience with Random Weddings!</p>
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
