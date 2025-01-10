import React, { useState } from "react";
import "./Movie.css";

const Movie: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = () => {
    alert(`Comment: ${comment}\nRating: ${rating} stars`);
  };

  return (
    <div className="movie-container">
      {/* Movie Section */}
      <div className="movie-info">
        <div className="movie-img">
          <img src="public/images/Movies10.jpg" alt="Movie Poster" />
        </div>
        <div className="movie-details">
          <h1>AMARAN</h1>
       
          <p>
          "Amaran" (2024) is a Tamil biographical action film directed by Rajkumar Periasamy, starring Sivakarthikeyan as Major Mukund Varadarajan. The movie chronicles Mukund's life, his heroic sacrifice during the 2014 Qazipathri Operation, and his posthumous Ashoka Chakra honor. Released on Diwali 2024, it became a box office hit and a tribute to Mukund's bravery, earning critical acclaim for its performances, direction, and music.          </p>
          <p className="avg-rating">⭐ Avg Rating: 4.5</p>
          <a
            href="https://youtu.be/9SSd9L0SxN0?si=_-imassd_nnqpUGB"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-trailer"
          >
            Watch Trailer on YouTube
          </a>
        </div>
      </div>

      {/* Comment and Rating Section */}
      <div className="interaction-section">
        <h3>Write Your Comment</h3>
        <textarea
          placeholder="Write your comment here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-box"
        ></textarea>

        <div className="rating-section">
          <h4>Give the Rating:</h4>
          <div className="stars">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`star ${starValue <= (hover || rating) ? "filled" : ""}`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  ⭐
                </span>
              );
            })}
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Movie;
