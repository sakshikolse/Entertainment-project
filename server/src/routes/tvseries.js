
const express = require('express');
const router = express.Router();
const TVSeries = require('../models/tv-series');

// Get all bookmarked TV series
router.get('/bookmarked', async (req, res) => {
  try {
    const bookmarkedSeries = await TVSeries.find({ bookmarked: true });
    res.json(bookmarkedSeries);
  } catch (error) {
    console.error('Error fetching bookmarked TV series:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// Get a single TV series by ID
router.get('/:id', getTVSeries, (req, res) => {
  res.json(res.tvSeries);
});

// Get all TV series
router.get('/', async (req, res) => {
  try {
    const tvSeries = await TVSeries.find();
    res.json(tvSeries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id/bookmark', async (req, res) => {
  try {
    const { id } = req.params;
    const series = await TVSeries.findById(id);
    if (!series) {
      return res.status(404).json({ message: 'TV series not found' });
    }
    series.bookmarked = !series.bookmarked;
    await series.save();
    res.json(series);
  } catch (error) {
    console.error('Error toggling bookmark status for TV series:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

async function getTVSeries(req, res, next) {
  let tvSeries;
  try {
    tvSeries = await TVSeries.findById(req.params.id);
    if (tvSeries == null) {
      return res.status(404).json({ message: 'TV series not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.tvSeries = tvSeries;
  next();
}

module.exports = router;

