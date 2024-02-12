
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Navbar component displaying navigation links
const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Home link */}
      <Link to="/" className="nav-item">
        <img
          src={process.env.PUBLIC_URL + '/Images/home2.png'}
          alt="Home"
          style={{ width: '35px', height: '45px' }}
        />
        <span className="Name">Home</span>
      </Link>
      
        {/* Movies link */}
      <Link to="/movies" className="nav-item">
        <img
          src={process.env.PUBLIC_URL + '/Images/movie2.png'}
          alt="Movies"
          style={{ width: '45px', height: '50px' }}
        />
        <span className="Name">Movies</span>
      </Link>

       {/* TV Series link */}
      <Link to="/tvseries" className="nav-item">
        <img
          src={process.env.PUBLIC_URL + '/Images/tv-series.png'}
          alt="TV Series"
          style={{ width: '40px', height: '50px' }}
        />
        <span className="Name">TV Series</span>
      </Link>

          {/* Bookmarks link */}
      <Link to="/bookmarked" className="nav-item">
        <img
          src={process.env.PUBLIC_URL + '/Images/bookmark2.png'}
          alt="Bookmark"
          style={{ width: '45px', height: '40px' }}
        />
        <span className="Name">Bookmarks</span>
      </Link>


        {/* Login link */}
      <Link to="/login" className="nav-item">
        <img
          src={process.env.PUBLIC_URL + '/Images/login2-icon.png'}
          alt="Login"
          style={{ width: '45px', height: '40px' }}
        />
        <span className="Name">Login</span>
      </Link>
    </div>
  );
};

export default Navbar;


