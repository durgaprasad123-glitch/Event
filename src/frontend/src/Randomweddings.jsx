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
                    <img src="https://tse3.mm.bing.net/th?id=OIP.7KI-g3RbGy6vI8UdbU2rwAHaE1&pid=Api&P=0&h=220" alt="Traditional Indian Wedding" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.XsryPBQn2CMmtqbSb0Id_AHaE8&pid=Api&P=0&h=220" alt="Western Style Wedding" />
                </div>
                <div className="gallery-item">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.sDdEOx6uov4XhYgDcviTfAHaE8&pid=Api&P=0&h=220" alt="Luxury Wedding Setup" />
                </div>
                <div className="gallery-item">
                    <br></br>
                </div>
              
                <div className="gallery-item">
                    <iframe
                        width="560"
                        height="315"
                        
                       
                        src="https://www.youtube.com/embed/kFiZ6HuGJGs?si=afSAOOfQw0eYbDlC"
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
