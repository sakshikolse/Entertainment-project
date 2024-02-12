// Importing express library and creating a router
const express = require('express');
const router = express.Router();
// Importing the Movie model
const Movie = require('../models/movie');

// Route to get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get a specific movie by ID
router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie);
});

// Route to get all bookmarked movies
router.get('/api/bookmarked', async (req, res) => {
  try {
    const bookmarkedMovies = await Movie.find({ bookmarked: true });
    res.json(bookmarkedMovies);
  } catch (error) {
    console.error('Error fetching bookmarked movies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to get all bookmarked movies
router.put('/api/movies/:id/bookmark', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    movie.bookmarked = !movie.bookmarked;
    await movie.save();
    res.json(movie);
  } catch (error) {
    console.error('Error toggling bookmark status:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Middleware to get a specific movie by ID
async function getMovie(req, res, next) {
  let movie;
  try {
    movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.movie = movie;
  next();
}

module.exports = router;


