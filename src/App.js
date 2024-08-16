// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PopularMovies from './components/PopularMovies';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';
import RateMovie from './components/RateMovie';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header onSearch={handleSearch} />
          <main>
            <Routes>
              <Route path="/" element={<PopularMovies searchQuery={searchQuery} />} />
              <Route path="/movies" element={<PopularMovies searchQuery={searchQuery} />} />
              <Route path="/tv" element={<div>TV Content</div>} />
              <Route path="/entertainment" element={<div>Entertainment Content</div>} />
              <Route path="/sports" element={<div>Sports Content</div>} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/rate-movie" element={<RateMovie />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
