import React, { useState } from "react";
import "./TopMovies.css";

const TopMovies: React.FC = () => {
  const movies = [
    { name: "AMARAN", rating: 8.5, image: "/Images/Movies10.jpg", trailer: "https://www.youtube.com/embed/9SSd9L0SxN0", page: "/movies" },
    { name: "DON", rating: 4.8, image: "/Images/Movies11.jpg", trailer: "https://www.youtube.com/embed/s5ak-NY6OC8", page: "/movies/don" },
    { name: "BIGIL", rating: 4.5, image: "/Images/Movies6.jpg", trailer: "https://www.youtube.com/embed/GR-Ui8-V2M0", page: "/movies/bigil" },
    { name: "96", rating: 4.2, image: "/Images/Movies2.jpg", trailer: "https://www.youtube.com/embed/r0synl-lI4I", page: "/movies/96" },
    { name: "MASTER", rating: 4.2, image: "/Images/Movies8.jpg", trailer: "https://www.youtube.com/embed/UTiXQcrLlv4", page: "/movies/master" },
    { name: "BEAST", rating: 3.9, image: "/Images/Movies5.jpg", trailer: "https://www.youtube.com/embed/vTIIMJ9tUc8", page: "/movies/beast" },
    { name: "MERSAL", rating: 3.8, image: "/Images/Movies7.jpg", trailer: "https://www.youtube.com/embed/gQDo5QuZTaw", page: "/movies/mersal" },
  ].sort((a, b) => b.rating - a.rating);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const openTrailer = (trailerUrl: string) => {
    setSelectedTrailer(trailerUrl);
  };

  const closeTrailer = () => {
    setSelectedTrailer(null);
  };

  return (
    <div className="top-movies-container">
      <h2>TOP MOVIES</h2>
      <div className="movie-carousel">
        {displayedMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="movie-image">
              {/* Wrap the image with a clickable link */}
              <a href={movie.page} target="_blank" rel="noopener noreferrer">
                <img src={movie.image} alt={movie.name} />
              </a>
            </div>
            <div className="movie-info">
              <div className="rating">
                <span className="star">⭐</span>
                <span className="rating-value">{movie.rating}</span>
              </div>
              <h3 className="movie-name">{movie.name}</h3>
              <button className="watchlist-button">+ Watchlist</button>
              <button className="trailer-button" onClick={() => openTrailer(movie.trailer)}>
                Trailer
              </button>
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

      {selectedTrailer && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-button" onClick={closeTrailer}>
              ✖
            </button>
            <iframe
              width="560"
              height="315"
              src={selectedTrailer}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopMovies;
