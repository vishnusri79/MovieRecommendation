// src/components/RateMovie.js
import React, { useState } from 'react';
import './RateMovie.css';

const RateMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [director, setDirector] = useState('');
  const [yearReleased, setYearReleased] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle rating submission logic here
    setSubmitted(true);
  };

  return (
    <div className="rate-movie-container">
      <div className="rate-movie">
        <h2>Rate a Movie</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie Name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <input
            type="number"
            placeholder="Year Released"
            value={yearReleased}
            onChange={(e) => setYearReleased(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <button type="submit">Submit Rating</button>
        </form>
        {submitted && <p className="thank-you-message">Thank you for rating!</p>}
      </div>
    </div>
  );
};

export default RateMovie;
