
import React, { useState, useEffect } from 'react';
import './Movie.css'; // Import CSS styles for the movie component
import MovieIcon from '@mui/icons-material/Movie';// Import icon for movies
import BookmarkIcon from '@mui/icons-material/Bookmark';// Import bookmark icon
import './Home.css';
import TVIcon from '@mui/icons-material/Tv';// Import icon for TV series
import SearchBox from './SearchBox'; // Import search box component



// Home component displaying trending and recommended media
const Home = () => {
   // State hooks for storing media data, filtered media, search term, and bookmarked item
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [recommendedMedia, setRecommendedMedia] = useState([]);
  const [series, setSeries] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState([]);
  const [filteredRecommendedMedia, setFilteredRecommendedMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
  const [bookmarkedRecommendedMedia, setBookmarkedRecommendedMedia] = useState([]);

    // Function to handle search functionality
  const handleSearch = (searchTerm) => {
    // Filter TV series based on the search term
    setSearchTerm(searchTerm);
    const filteredSeries = series.filter(serie =>
      serie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSeries(filteredSeries);

    const filteredRecommended = recommendedMedia.filter(media =>
      media.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecommendedMedia(filteredRecommended);
  };

  useEffect(() => {
     // Fetch trending movies and TV series from backend
    const fetchTrending = async () => {
      try {
        const moviesResponse = await fetch('https://backend123-2be5.onrender.com/api/movies');
        if (!moviesResponse.ok) {
          throw new Error('Failed to fetch trending movies');
        }
        const trendingMoviesData = await moviesResponse.json();
        setTrendingMovies(trendingMoviesData.slice(0, 3));

        const seriesResponse = await fetch('https://backend123-2be5.onrender.com/api/tvseries');
        if (!seriesResponse.ok) {
          throw new Error('Failed to fetch trending TV series');
        }
        const trendingSeriesData = await seriesResponse.json();
        setTrendingSeries(trendingSeriesData.slice(4, 7));

       
        setSeries(trendingSeriesData);
      } catch (error) {
        console.error('Error fetching trending media:', error);
      }
    };

      // Fetch recommended movies from backend
    const fetchRecommended = async () => {
      try {
        const recommendedResponse = await fetch('https://backend123-2be5.onrender.com/api/movies');
        if (!recommendedResponse.ok) {
          throw new Error('Failed to fetch recommended media');
        }
        const recommendedData = await recommendedResponse.json();
        setRecommendedMedia(recommendedData.slice(5, 10));

      } catch (error) {
        console.error('Error fetching recommended media:', error);
      }
    };

    fetchTrending();
    fetchRecommended();
  }, []);

 // Function to handle bookmarking of movies
  const handleBookmarkMovie = async (movieId) => {
    try {
      const response = await fetch(`https://backend123-2be5.onrender.com/api/movies/${movieId}/bookmark`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to toggle bookmark status');
      }
      // Update the bookmarkedMovies state based on the response
      const updatedMovie = await response.json();
      setBookmarkedMovies(bookmarkedMovies.includes(updatedMovie._id)
        ? bookmarkedMovies.filter(id => id !== updatedMovie._id)
        : [...bookmarkedMovies, updatedMovie._id]
      );
    } catch (error) {
      console.error('Error toggling bookmark status:', error);
    }
  };
  
     // Function to handle bookmarking of TV series
  const handleBookmarkSeries = async (seriesId) => {
    try {
      const response = await fetch(`https://backend123-2be5.onrender.com/api/tvseries/${seriesId}/bookmark`, {
        method: 'PUT',
      });
      if (!response.ok) {
        throw new Error('Failed to toggle bookmark status');
      }
      // Update the bookmarkedSeries state based on the response
      const updatedSeries = await response.json();
      setBookmarkedSeries(bookmarkedSeries.includes(updatedSeries._id)
        ? bookmarkedSeries.filter(id => id !== updatedSeries._id)
        : [...bookmarkedSeries, updatedSeries._id]
      );
    } catch (error) {
      console.error('Error toggling bookmark status:', error);
    }
  };
  
  // Function to handle bookmarking of recommended media
  const handleBookmarkRecommendedMedia = (mediaId) => {
    setBookmarkedRecommendedMedia(bookmarkedRecommendedMedia.includes(mediaId)
      ? bookmarkedRecommendedMedia.filter(id => id !== mediaId)
      : [...bookmarkedRecommendedMedia, mediaId]
    );
  };
  

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
      {/* Render search box component */}
        <SearchBox onSearch={handleSearch} />
      </div>
      <h2>Trending</h2>
      <div className="movie-container">
        {/* Render trending movies */}
        {searchTerm === '' && trendingMovies.map((movie) => (
          <div key={movie._id} className="movie-card" style={{ position: 'relative' }}>
            <img src={movie.posterUrl} alt={movie.title} />
                 {/* Render bookmark icon for movies */}
            <div
              className="bookmark-icon"
              onClick={() => handleBookmarkMovie(movie._id)}
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
              {/* Display year and type of media */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{movie.year}  &nbsp;&nbsp;&nbsp; Movie</p>
              <MovieIcon />
            </div>
            <p>{movie.title}</p>
          </div>
        ))}
        {/* Render trending TV series */}
        {searchTerm === '' && trendingSeries.map((series) => (
          <div key={series._id} className="movie-card" style={{ position: 'relative' }}>
            <img src={series.posterUrl} alt={series.title} />
             {/* Render bookmark icon for TV series */}
            <div
              className="bookmark-icon"
              onClick={() => handleBookmarkSeries(series._id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedSeries.includes(series._id) ? 'pink' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <BookmarkIcon />
            </div>
               {/* Display year and type of media */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{series.year}  &nbsp;&nbsp;&nbsp; TV Series</p>
              <TVIcon />
            </div>
            <p>{series.title}</p>
          </div>
        ))}
        {/* Render filtered series */}
        {searchTerm !== '' && filteredSeries.map((series) => (
          <div key={series._id} className="series-card" style={{ position: 'relative' }}>
            <img src={series.posterUrl} alt={series.title} />
            <div
              className="bookmark-icon"
              onClick={() => handleBookmarkSeries(series._id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedSeries.includes(series._id) ? 'pink' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <BookmarkIcon />
            </div>
               {/* Display year and type of media */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{series.year}  &nbsp;&nbsp;&nbsp; TV Series</p>
              <MovieIcon />
            </div>
            <p>{series.title}</p>
          </div>
        ))}
      </div>
      <h2>Recommended for you</h2>
      <div className="movie-container">
        {/* Render recommended media */}
        {searchTerm === '' && recommendedMedia.map((mediaItem) => (
          <div key={mediaItem._id} className="movie-card" style={{ position: 'relative' }}>
            <img src={mediaItem.posterUrl} alt={mediaItem.title} />
            <div
              className="bookmark-icon"
              onClick={() => handleBookmarkRecommendedMedia(mediaItem._id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedRecommendedMedia.includes(mediaItem._id) ? 'pink' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <BookmarkIcon />
            </div>
             {/* Display year and type of media */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{mediaItem.year} &nbsp;&nbsp;&nbsp; {mediaItem.mediaType === 'movie' ? 'Movie' : 'Movie'}</p>
              <MovieIcon />
            </div>
            <p>{mediaItem.title}</p>
          </div>
        ))}
        {/* Render filtered recommended media */}
        {searchTerm !== '' && filteredRecommendedMedia.map((mediaItem) => (
          <div key={mediaItem._id} className="movie-card" style={{ position: 'relative' }}>
            <img src={mediaItem.posterUrl} alt={mediaItem.title} />
            <div
              className="bookmark-icon"
              onClick={() => handleBookmarkRecommendedMedia(mediaItem._id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: bookmarkedRecommendedMedia.includes(mediaItem._id) ? 'pink' : 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black'
              }}
            >
              <BookmarkIcon />
            </div>
               {/* Display year and type of media */}
            <div style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
              <p>{mediaItem.year} &nbsp;&nbsp;&nbsp; {mediaItem.mediaType === 'movie' ? 'Movie' : 'Movie'}</p>
              <MovieIcon />
            </div>
            <p>{mediaItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;





