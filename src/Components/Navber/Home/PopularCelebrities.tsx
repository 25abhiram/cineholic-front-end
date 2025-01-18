import './PopularCelebrities.css';
import { useState } from 'react';

const PopularCelebrities = () => {
  const celebrities = [
    { id: 1, image: '/Images/vijay.jpg', name: 'vijay' },
    { id: 2, image: '/Images/sk3.jpg', name: 'Sivakarthikeyan' },
    { id: 3, image: '/Images/Rajinikanth1.jpg', name: 'Rajinikanth'  },
    { id: 4, image: '/Images/Ajith.jpg', name: 'Ajith Kumar' },
    { id: 7, image: '/Images/Sathyaraj.jpg', name: 'Sathyaraj'  },
    { id: 8, image: '/Images/Silambarasan.jpg', name: 'Silambarasan' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(celebrities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCelebrities = celebrities.slice(startIndex, startIndex + itemsPerPage);

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
    <div className="popular-container">
      <h2 className="heading">MOST POPULAR CELEBRITY</h2>
      <div className="celebrities">
        {displayedCelebrities.map((celeb) => (
          <div className="celebrity" key={celeb.id}>
            <div className="circle">
              <img src={celeb.image} alt={celeb.name} />
            </div>
            <p className="name">{celeb.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          className="prev-button"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="next-button"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularCelebrities;
