import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TVSeriesDetails.css';

// Component for displaying details of a TV series
  const TvSeriesDetails = () => {
  const { seriesId } = useParams();// Get the seriesId from URL params
  const [series, setSeries] = useState(null);// State for storing TV series details
  

   // Fetch TV series details from the backend when the component mounts or when seriesId changes
   useEffect(() => {
    fetch(`https://backend123-2be5.onrender.com/api/tvSeries/${seriesId}`)
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error('Error fetching TV series details:', error));
  }, [seriesId]);

  // If series is not loaded yet, show a loading message
   if (!series) {
    return <div>Loading...</div>;
  }

   // Render TV series details
  return (
    <div className="movie-details-container">
      <div className="movie-poster">
        <img
          src={series.posterUrl}
          alt={series.title}
          style={{ padding: '10px', height: '400px', width: '300px' }}
        />
      </div>

      <div className="movie-details">
        <h1>{series.title}</h1>
        <h4 style={{ margin: '0', padding: '1' }}>
          {series.rating}
          {series.starRepresentation}
        </h4>
        
      {/* Details */}
     <div class="row">
     <div class="h3">
      <h3>Language</h3>
      </div>
    <div class="h3">
      <h3>First Air</h3>
    </div>
     <div class="h3">
    <h3>Last Air</h3>
     </div>
    <div class="h3">
    <h3>Status</h3>
     </div>
    </div>

    <div class="row">
    <div class="h5">
    <h5>{series.language}</h5>
    <h5>{series.firstair}</h5>
    <h5>{series.lastair}</h5>
    <h5>{series.status}</h5>
    </div>
   </div>
   <div>
     {/* Genres */}
   <h3 className="heading synopsis-genres">Genres</h3>
   <div className="genre-box">
            {Array.isArray(series.genres) ? (
              series.genres.map((genres, index) => (
                <div key={index} className="genre-item">
                  {genres}
                </div>
              ))
            ) : (
              <span>{series.genres}</span>
            )}
          </div>
          
        </div>
          {/* Synopsis */}
        <div >
          <h3  className="heading synopsis-genres">Synopsis</h3>
          <h6>{series.synopsis}</h6>
        </div>
       
           {/* Website link */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <a href={series.Website} target="_blank" rel="noopener noreferrer">
            <button style={{ marginLeft: '2px', background: 'lightblue', fontSize: '1em', padding: '10px 20px' }}>
              Website 🔗
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TvSeriesDetails;
