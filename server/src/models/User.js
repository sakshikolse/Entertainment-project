// Importing mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Defining a schema for the User model using mongoose.Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Exporting the mongoose model 'User' with the defined userSchema
module.exports = mongoose.model('User', userSchema);
