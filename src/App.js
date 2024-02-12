

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Movies from './component/Movies';
import MovieDetails from './component/MovieDetails';
import TVSeries from './component/TVSeries';
import TvSeriesDetails from './component/TvSeriesDetails';
import Bookmarked from './component/Bookmarked';
import Home from './component/Home';
import Login from './component/Login';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <div>
         {/* Render the navbar component */}
        <Navbar />
         {/* Main content area */}
        <div style={{ backgroundColor: ' #282c34', minHeight: '100vh',color:'white' }}>
           {/* Define routes using React Router */}
         <Routes>
           {/* Route for displaying movies */}
           <Route path="/movies" element={<Movies />} />
            {/* Route for displaying details of a specific movie */}
           <Route path="/movies/:movieId" element={<MovieDetails />} />
           {/* Route for displaying TV series */}
           <Route path="/tvseries" element={<TVSeries />} />
             {/* Route for displaying details of a specific TV series */}
           <Route path="/tvseries/:seriesId" element={<TvSeriesDetails/>} />
           {/* Route for displaying bookmarked items */}
           <Route path="/bookmarked" element={<Bookmarked />} />
            {/* Route for displaying the home page */}
           <Route path="/"    element={<Home />} />
            {/* Route for displaying the login page */}
           <Route path="/login"    element={<Login />} />
          </Routes>
          {/* Render the footer component */}
         <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;







