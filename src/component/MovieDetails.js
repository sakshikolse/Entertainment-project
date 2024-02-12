
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
   // State variables for managing movie data and UI states
  const [movie, setMovie] = useState(null);
  const [showGenres, setShowGenres] = useState(false);
  const [showIMDB, setShowIMDB] = useState(false);

   // Toggle function to show/hide IMDB link
  const handleIMDBClick = () => {
    setShowIMDB(!showIMDB);
  };

    // Toggle function to show/hide genres
  const handleButtonClick = () => {
    setShowGenres(!showGenres);
  };

 // Fetch movie details from the backend API upon component mount
  useEffect(() => {
    fetch(`https://backend123-2be5.onrender.com/api/movies/${movieId}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [movieId]);

   // Display loading message while movie data is being fetched
  if (!movie) {
    return <div>Loading...</div>;
  }

    // Render movie details once data is fetched
  return (
    <div className="movie-details-container">
      <div className="movie-poster">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          style={{ padding: '10px', height: '400px', width: '300px' }}
        />
      </div>

      <div className="movie-details">
           {/* Display movie title and rating */}
        <h1>{movie.title}</h1>
        <h4 style={{ margin: '0', padding: '1' }}>
          {movie.rating}
          {movie.starRepresentation}
        </h4>
          {/* Display movie details such as length, language, year, and status */}
        <div className="heading">
          <h3>Length</h3>
          <h3>Language</h3>
          <h3>Year</h3>
          <h3>Status</h3>
        </div>
        <div className="heading">
          <h5>{movie.length} mins</h5>
          <h5>{movie.language}</h5>
          <h5>{movie.year}</h5>
          <h5>{movie.status}</h5>
        </div>
          {/* Display movie genres */}
        <div>
          <h4>Genres</h4>
          <div className="genre-box">
            {Array.isArray(movie.genre) ? (
              movie.genre.map((genre, index) => (
                <div key={index} className="genre-item">
                  {genre}
                </div>
              ))
            ) : (
              <span>{movie.genres}</span>
            )}
          </div>
          {/* Button to toggle displaying all genres */}
          <h4>
            <button onClick={handleButtonClick}>History</button>
          </h4>
            {/* Display all genres when the button is clicked */}
          {showGenres && <h6>{movie.genres}</h6>}
        </div>
           {/* Display movie synopsis */}
        <div>
          <h3>Synopsis</h3>
          <h6>{movie.synopsis}</h6>
        </div>
         {/* Display movie cast members */}
        <div>
          <h3>Casts</h3>
          {movie && movie.cast && (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
               {/* Split cast members and map them to display individually */}
              {movie.cast.split(',').map((castMember, index) => (
                <div
                  key={index}
                  style={{
                    display: 'inline-block',
                    border: '1px solid #ccc',
                    padding: '8px',
                    margin: '5px',
                  }}
                >
                  <h4>{castMember.trim()}</h4>
                </div>
              ))}
            </div>
          )}
        </div>

         {/* Display IMDB link with a button to toggle its visibility */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h1>
            <button
              onClick={handleIMDBClick}
              style={{ background: 'lightblue', fontSize: '0.5em', padding: '12px 25px' }}
            >
              IMDB &#9733;
            </button>
          </h1>
          {movie && showIMDB && (
            <a href={movie.IMDB} target="_blank" rel="noopener noreferrer">
              {movie.IMDB}
            </a>
          )}
               {/* Display movie website link */}
          <a href={movie.Website} target="_blank" rel="noopener noreferrer">
            <button
              style={{ marginLeft: '10px', background: 'lightblue', fontSize: '1em', padding: '10px 20px' }}
            >
              Website 🔗
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;







