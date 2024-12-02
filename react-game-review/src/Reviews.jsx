import React, { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [gameName, setGameName] = useState('');

  const handleReviewTextChange = (e) => setReviewText(e.target.value);
  const handleGameNameChange = (e) => setGameName(e.target.value);

  const handleSubmitReview = () => {
    if (!gameName || !reviewText) {
      return;
    }
    const newReview = {
      game: gameName,
      review: reviewText,
    };
    setReviews([...reviews, newReview]);
    setReviewText('');
    setGameName('');
  };

  return (
    
    <div className="reviews-container">
        <h1>Welcome to DeGoat's Reviews!</h1> <br />
        <h2>Reviews</h2> <br />
        <div className="review-form">
            <div>
            <label>Name Of The Game:</label>
            <input
                type="text"
                value={gameName}
                onChange={handleGameNameChange}
            />
            </div>
            <div>
            <label>Review:</label>
            <textarea
                value={reviewText}
                onChange={handleReviewTextChange}
            />
            </div>
            <button onClick={handleSubmitReview}>Submit</button>
        </div>

        <h3>Reviews:</h3>
        <div className="reviews-list">
            {reviews.length === 0 ? (
            <p>No reviews yet.</p>
            ) : (
            reviews.map((review, index) => (
                <div key={index} className="review-item">
                <h4>{review.game}</h4>
                <p>{review.review}</p>
                <small>{new Date().toLocaleDateString()}</small>
                </div>
            ))
            )}
        </div>
    </div>
  );
}
