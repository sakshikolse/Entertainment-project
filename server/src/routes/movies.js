
const express = require('express');
const router = express.Router();

const Movie = require('../../models/movie');




// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single movie by ID
router.get('/:id', getMovie, (req, res) => {
  res.json(res.movie);
});

router.get('/api/bookmarked', async (req, res) => {
  try {
    const bookmarkedMovies = await Movie.find({ bookmarked: true });
    res.json(bookmarkedMovies);
  } catch (error) {
    console.error('Error fetching bookmarked movies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

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


