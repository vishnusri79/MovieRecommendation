// src/components/MovieCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
