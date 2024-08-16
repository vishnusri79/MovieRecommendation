// src/components/PopularMovies.js

import React, { useEffect, useState } from 'react';
import { fetchPopularMovies, searchMovies } from '../api';
import MovieCard from './MovieCard';
import './PopularMovies.css';

const PopularMovies = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = searchQuery ? await searchMovies(searchQuery) : await fetchPopularMovies();
      setMovies(movies);
    };
    getMovies();
  }, [searchQuery]);

  return (
    <div className="popular-movies">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default PopularMovies;
