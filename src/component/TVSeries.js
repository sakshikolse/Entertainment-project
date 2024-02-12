import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./TVSeries.css";
import SearchBox from './SearchBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TVIcon from '@mui/icons-material/Tv';

// Component for displaying TV series and handling bookmarks
const TVSeries = () => {
  const [series, setSeries] = useState([]);// State for storing all TV series
  const [filteredSeries, setFilteredSeries] = useState([]); // State for storing filtered TV series
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);// State for storing bookmarked TV series


  // Fetch TV series data from the backend when the component mounts
  useEffect(() => {
    fetch('https://backend123-2be5.onrender.com/api/tvseries')
      .then(response => response.json())
      .then(data => {
        setSeries(data);
        setFilteredSeries(data);
      })
      .catch(error => console.error('Error fetching TV series:', error));
  }, []);


   // Handle search action
  const handleSearch = (searchTerm) => {
    const filtered = series.filter(serie =>
      serie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeries(filtered);
  };

    // Handle bookmark action
    const handleBookmark = async (seriesId) => {
    try {
      const response = await fetch(`https://backend123-2be5.onrender.com/api/tvseries/${seriesId}/bookmark`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to toggle bookmark status');
      }
      const updatedSeries = await response.json();
      setBookmarkedSeries(prevBookmarkedSeries => (
        prevBookmarkedSeries.includes(updatedSeries._id)
          ? prevBookmarkedSeries.filter(id => id !== updatedSeries._id)
          : [...prevBookmarkedSeries, updatedSeries._id]
      ));
    } catch (error) {
      console.error('Error toggling bookmark status:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#282c34', color: 'white', padding: '20px' }}>
      <SearchBox onSearch={handleSearch} />
      <h2 style={{ color: 'white' }}>TV Series</h2>
     <div className="series-grid">
        {filteredSeries.map((serie) => (
          <div key={serie._id} className="series-card" style={{ position: 'relative' }}>
            <Link to={`/tvseries/${serie._id}`}>
              <img src={serie.posterUrl} alt={serie.title} style={{ marginRight: '10px' }} />
            </Link>
            <div
              className="bookmark-icon"
              onClick={() => handleBookmark(serie._id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedSeries.includes(serie._id) ? 'pink' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <BookmarkIcon />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{serie.year} &nbsp;&nbsp;&nbsp; TV Series</p>
              <TVIcon />
            </div>
            <p>{serie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVSeries;

