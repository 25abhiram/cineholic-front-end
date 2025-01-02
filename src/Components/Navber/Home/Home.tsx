import React from "react";
import Background from './Background';
import Celebrities from './PopularCelebrities';
import TopMovies from './TopMovies';

const Home: React.FC = () => {
  return (
    <div>
      <Background />
      <Celebrities />
      <TopMovies />
    </div>
  );
};

export default Home;
