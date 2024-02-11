
const mongoose = require('mongoose');

const tvSeriesSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  seasons: Number,
  description: String,
  posterUrl: String,
  bookmarked: Boolean
});

module.exports = mongoose.model('TVSeries', tvSeriesSchema);
