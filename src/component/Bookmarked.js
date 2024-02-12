import React, { useState, useEffect } from 'react';
import './bookmarked.css'; 
import SearchBox from './SearchBox';

const Bookmarked = () => {
   // State hooks for storing bookmarked movies, series, filtered movies, filtered series, and search term
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

 // Fetch bookmarked movies and series from backend on component mount
  useEffect(() => {
     fetch('https://backend123-2be5.onrender.com/api/movies/bookmarked')
     .then(response => response.json())
      .then(data => {
        console.log('Received movie data from backend:', data); 
        setBookmarkedMovies(data);
      })
      .catch(error => console.error('Error fetching bookmarked movies:', error));

   
    fetch('https://backend123-2be5.onrender.com/api/tvseries/bookmarked')
      .then(response => response.json())
      .then(data => {
        console.log('Received series data from backend:', data); 
        setBookmarkedSeries(data);
      })
      .catch(error => console.error('Error fetching bookmarked series:', error));
  }, []);


  
  // Handle search functionality
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  
     // Filter bookmarked movies based on search term
    const filteredMovies = bookmarkedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
   

     
    // Filter bookmarked series based on search term
    const filteredSeries = bookmarkedSeries.filter(series =>
      series.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeries(filteredSeries);
  };

  return (
    <div className='bookmarked-cards'>
      <div style={{ marginBottom: '40px' }}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className="bookmarked-page">
         {/* Render bookmarked movies */}
        <h1>Bookmarked Movies</h1>
        {searchTerm === '' ? (
          <div className="bookmarked-movies">
            {bookmarkedMovies.length > 0 ? (
              bookmarkedMovies.map(movie => (
                <div key={movie._id} className="bookmarked-movie">
                  <img src={movie.posterUrl} alt={movie.title} />
                  <p>{movie.title}</p>
                </div>
              ))
            ) : (
              <p>No bookmarked movies yet</p>
            )}
          </div>
        ) : (
          <div className="bookmarked-movies">
            {filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <div key={movie._id} className="bookmarked-movie">
                  <img src={movie.posterUrl} alt={movie.title} />
                  <p>{movie.title}</p>
                </div>
              ))
            ) : (
              <p>No matching movies found</p>
            )}
          </div>
        )}

        {/* Render bookmarked TV series */}
        <h1>Bookmarked TV Series</h1>
        {searchTerm === '' ? (
          <div className="bookmarked-series">
            {bookmarkedSeries.length > 0 ? (
              bookmarkedSeries.map(series => (
                <div key={series._id} className="bookmarked-series-item">
                  <img src={series.posterUrl} alt={series.title} />
                  <p>{series.title}</p>
                </div>
              ))
            ) : (
              <p>No bookmarked TV series yet</p>
            )}
          </div>
        ) : (
          <div className="bookmarked-series">
            {filteredSeries.length > 0 ? (
              filteredSeries.map(series => (
                <div key={series._id} className="bookmarked-series-item">
                  <img src={series.posterUrl} alt={series.title} />
                  <p>{series.title}</p>
                </div>
              ))
            ) : (
              <p>No matching TV series found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarked;
