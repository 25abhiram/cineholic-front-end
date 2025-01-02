import './PopularCelebrities.css';
import { useState } from 'react';

const PopularCelebrities = () => {
  const celebrities = [
    { id: 1, image: '/Images/sk.jpg', name: 'Sivakarthikeyan 1' },
    { id: 2, image: '/Images/sk3.jpg', name: 'Sivakarthikeyan 2' },
    { id: 3, image: '/Images/sk4.jpg', name: 'Sivakarthikeyan 3'  },
    { id: 4, image: '/Images/sk6.jpg', name: 'Sivakarthikeyan 4' },
    { id: 5, image: '/Images/sk.jpg', name: 'Sivakarthikeyan 5' },
    { id: 6, image: '/Images/sk3.jpg', name: 'Sivakarthikeyan 6' },
    { id: 7, image: '/Images/sk4.jpg', name: 'Sivakarthikeyan 7'  },
    { id: 8, image: '/Images/sk6.jpg', name: 'Sivakarthikeyan 8' },
    { id: 1, image: '/Images/sk.jpg', name: 'Sivakarthikeyan 9' },
    { id: 2, image: '/Images/sk3.jpg', name: 'Sivakarthikeyan 10' },
    { id: 3, image: '/Images/sk4.jpg', name: 'Sivakarthikeyan 11'  },
    { id: 4, image: '/Images/sk6.jpg', name: 'Sivakarthikeyan 12' },
    { id: 5, image: '/Images/sk.jpg', name: 'Sivakarthikeyan 13' },
    { id: 6, image: '/Images/sk3.jpg', name: 'Sivakarthikeyan 14' },
    { id: 7, image: '/Images/sk4.jpg', name: 'Sivakarthikeyan 15'  },
    { id: 8, image: '/Images/sk6.jpg', name: 'Sivakarthikeyan 16' },
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
