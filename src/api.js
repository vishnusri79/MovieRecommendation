// src/api.js

//const API_KEY = '72fd31d6d6843ffbb61268cd02951491';


const API_KEY = '72fd31d6d6843ffbb61268cd02951491';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};


