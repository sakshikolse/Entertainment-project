

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  description: String,
  posterUrl: String,
 
  bookmarked: Boolean,

});

module.exports = mongoose.model('Movie', movieSchema);


