// src/components/MovieDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
