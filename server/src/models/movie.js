
// Importing mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Defining a schema for the Movie model using mongoose.Schema
const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  description: String,
  posterUrl: String,
  bookmarked: Boolean,

});
// Exporting the mongoose model 'Movie' with the defined movieSchema
module.exports = mongoose.model('Movie', movieSchema);


