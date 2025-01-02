import React, { useState } from "react";
import "./TopMovies.css";

const TopMovies: React.FC = () => {
  // Array of movie data sorted by rating (highest to lowest)
  const movies = [
    { name: "Movie 1", rating: 8.5, image: "/Images/Movies10.jpg" },
    { name: "Movie 5", rating: 4.8, image: "/Images/Movies4.jpg" },
    { name: "Movie 11", rating: 4.8, image: "/Images/Movies11.jpg" },
    { name: "Movie 7", rating: 4.5, image: "/Images/Movies6.jpg" },
    { name: "Movie 3", rating: 4.2, image: "/Images/Movies2.jpg" },
    { name: "Movie 9", rating: 4.2, image: "/Images/Movies8.jpg" },
    { name: "Movie 6", rating: 3.9, image: "/Images/Movies5.jpg" },
    { name: "Movie 12", rating: 3.9, image: "/Images/Movies12.jpg" },
    { name: "Movie 2", rating: 3.8, image: "/Images/Movies1.jpg" },
    { name: "Movie 8", rating: 3.8, image: "/Images/Movies7.jpg" },
    { name: "Movie 4", rating: 3.5, image: "/Images/Movies3.jpg" },
    { name: "Movie 10", rating: 3.5, image: "/Images/Movies9.jpg" },
  ].sort((a, b) => b.rating - a.rating); // Sort movies by rating descending

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate total pages and displayed movies
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="top-movies-container">
      <h2>TOP MOVIES</h2>
      <div className="movie-carousel">
        {displayedMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="movie-image">
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className="movie-info">
              <div className="rating">
                <span className="star">⭐</span>
                <span className="rating-value">{movie.rating}</span>
              </div>
              <h3 className="movie-name">{movie.name}</h3>
              <button className="watchlist-button">+ Watchlist</button>
              <button className="trailer-button">Trailer</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} className="prev-button" disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={handleNextPage} className="next-button" disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TopMovies;
