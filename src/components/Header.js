// src/components/Header.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './Header.css';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      logout();
      navigate('/');
      alert('Signed out successfully!');
    }).catch((error) => {
      alert('Error signing out: ' + error.message);
    });
  };

  return (
    <header className="header">
      <div className="logo">KQ</div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies or genres..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <nav className="nav-bar">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/movies" activeClassName="active">Movies</NavLink>
        <NavLink to="/tv" activeClassName="active">TV</NavLink>
        <NavLink to="/entertainment" activeClassName="active">Entertainment</NavLink>
        <NavLink to="/sports" activeClassName="active">Sports</NavLink>
        {isLoggedIn && <NavLink to="/rate-movie" activeClassName="active">Rate a Movie</NavLink>}
      </nav>
      <div className="auth-buttons">
        {!isLoggedIn && <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>}
        {!isLoggedIn && <button className="signup-btn" onClick={() => setShowSignUp(true)}>SignUp</button>}
        {isLoggedIn && <button className="logout-btn" onClick={handleLogout}>Sign Out</button>}
      </div>
      {showLogin && <Login onClose={handleClose} />}
      {showSignUp && <SignUp onClose={handleClose} />}
    </header>
  );
};

export default Header;
