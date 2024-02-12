
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Movie.css";
import SearchBox from './SearchBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MovieIcon from '@mui/icons-material/Movie';

// Component for displaying a list of movies
const Movies = () => {
   // State variables for managing movie data and bookmarks
  const [movies, setMovies] = useState([]);// State for all movies
  const [filteredMovies, setFilteredMovies] = useState([]);// State for filtered movies based on search
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);// State for bookmarked movies

   // Fetch movies data from the backend API upon component mount
  useEffect(() => {
    fetch('https://backend123-2be5.onrender.com/api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);// Set the list of all movies
        setFilteredMovies(data); // Initialize filtered movies with all movies
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);


   // Handle search functionality
  const handleSearch = (searchTerm) => {
   const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredMovies(filtered);// Update filtered movies state
  };

   // Handle bookmarking/unbookmarking a movie
  const handleBookmark = async (movieId) => {
    try {
         // Toggle bookmark status for the selected movie via API
      const response = await fetch(`https://backend123-2be5.onrender.com/api/movies/${movieId}/bookmark`, {
        method: 'PUT',
      });
      
      if (!response.ok) {
        throw new Error('Failed to toggle bookmark status');
      }
      
      const updatedMovie = await response.json();
        // Update bookmarked movies state based on the response
      setBookmarkedMovies(bookmarkedMovies.includes(updatedMovie._id)
        ? bookmarkedMovies.filter(id => id !== updatedMovie._id)
        : [...bookmarkedMovies, updatedMovie._id]
      );
    } catch (error) {
      console.error('Error toggling bookmark status:', error);
    }
  };

   // Render movies component
  return (
    <div style={{ backgroundColor: '#282c34', color: 'white', padding: '20px' }}>
       {/* Search box component */}
      <SearchBox onSearch={handleSearch} />
      <h2 style={{ color: 'white' }}>Movies</h2>
         {/* Grid layout for displaying movies */}
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div key={movie._id} className="movie-card" style={{ position: 'relative' }}>
            {/* Link to movie details page */}
            <Link to={`/movies/${movie._id}`}>
            <img src={movie.posterUrl} alt={movie.title} style={{ marginRight: '10px' }} />
            </Link>
            {/* Bookmark icon */}
            <div
              className="bookmark-icon"
              onClick={() => handleBookmark(movie._id)} 
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedMovies.includes(movie._id) ? 'pink' : 'white', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black' 
              }}
            >
              <BookmarkIcon /> 
            </div>
              {/* Movie details */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{movie.year}  &nbsp;&nbsp;&nbsp; Movies</p>
              <MovieIcon /> 
            </div>
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;





