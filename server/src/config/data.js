
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sakshi123:Sakshi%4026@cluster0.xhnpazz.mongodb.net/test'; // Replace 'myentertainmentdb' with your actual database name

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

  