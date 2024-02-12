// Importing mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Defining a schema for the TVSeries model using mongoose.Schema
const tvSeriesSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  seasons: Number,
  description: String,
  posterUrl: String,
  bookmarked: Boolean
});

// Exporting the mongoose model 'TVSeries' with the defined tvSeriesSchema
module.exports = mongoose.model('TVSeries', tvSeriesSchema);
