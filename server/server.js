// const express = require('express');
// const mongoose = require('mongoose');
// const Movie = require('./models/movie'); // Adjust the path based on your project structure
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// mongoose.connect('mongodb+srv://sakshi123:Sakshi%4026@cluster0.xhnpazz.mongodb.net/test', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // app.get('/api/movies/:id', async (req, res) => {
// //   try {
// //     const movie = await Movie.findById(req.params.id);
// //     if (!movie) {
// //       return res.status(404).json({ error: 'Movie not found' });
// //     }
// //     res.json(movie);
// //   } catch (error) {
// //     console.error('Error fetching movie details:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });
// // app.get('/api/movies/:id', async (req, res) => {
// //   try {
// //     console.log('Movie ID:', req.params.id); // Log movie ID
// //     const movie = await Movie.findById(req.params.id);
// //     console.log('Movie Details:', movie); // Log movie details
// //     if (!movie) {
// //       return res.status(404).json({ error: 'Movie not found' });
// //     }
// //     res.json(movie);
// //   } catch (error) {
// //     console.error('Error fetching movie details:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // });
// app.get('/api/movies/:id', async (req, res) => {
//   try {
//     console.log('Fetching movie details for ID:', req.params.id);
//     const movie = await Movie.findById(req.params.id);
//     if (!movie) {
//       console.log('Movie not found');
//       return res.status(404).json({ error: 'Movie not found' });
//     }
//     console.log('Movie details:', movie);
//     res.json(movie);
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// // // Serve static files from the 'build' directory
// // app.use(express.static(path.join(__dirname, 'build')));

// // // Handle other routes by serving the React app
// // app.get('*', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// // });
// app.get('/api/test', (req, res) => {
//   res.send('MongoDB connection test successful!');
// });
// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });




// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/moviesdb', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Movie Schema
// const movieSchema = new mongoose.Schema({
//   title: String,
//   genre: String,
//   rating: Number,
// });

// const Movie = mongoose.model('Movie', movieSchema);

// // Endpoint to get all movies
// app.get('/api/movies', async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// backend/server.js
// backend/server.js
// backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3001;
// const path = require('path');




// app.use(express.static(path.join(__dirname, 'public')));

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// mongoose.connect('mongodb+srv://sakshi123:Sakshi%4026@cluster0.xhnpazz.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Movie Schema
// const movieSchema = new mongoose.Schema({
//   title: String,
//   rating: Number,
//   length: Number,
//   genres: [String],
//   synopsis: String,
//   cast: [String],
//   posterUrl: String,
//   movieUrl: String,
// });

// const Movie = mongoose.model('Movie', movieSchema);

// // Example endpoint to fetch all movies
// app.get('/api/movies', async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     console.error('Error fetching movies:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Example endpoint to fetch a single movie by ID
// app.get('/api/movies/:id', async (req, res) => {
//   const movieId = req.params.id;

//   try {
//     const movie = await Movie.findById(movieId);

//     if (!movie) {
//       return res.status(404).json({ error: 'Movie not found' });
//     }

//     res.json(movie);
//   } catch (error) {
//     console.error('Error fetching movie details:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // ... (other endpoints for adding, updating, and deleting movies)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const moviesRouter = require('./src/routes/movies');
// const cors = require('cors');
// const path = require('path');
// const dotenv = require('dotenv');


// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// const { MONGODB_URI } = process.env;
// app.use('/public', express.static(path.join(__dirname, 'public')))

// // Connect to MongoDB mongodb+srv://sakshi123:Sakshi%4026@cluster0.xhnpazz.mongodb.net/test'
// mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', (error) => console.error('MongoDB connection error:', error));
// db.once('open', () => console.log('Connected to MongoDB'));

// // Routes
// app.use('/api/movies', moviesRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const moviesRouter = require('./src/routes/movies');
const router = require('./src/routes/movies');
const tvseriesRouter = require('./src/routes/tvseries');
const userRouter = require('./src/routes/user');




const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
const { MONGODB_URI } = process.env;

// Check if MONGODB_URI is available
if (!MONGODB_URI) {
  console.error('MongoDB connection string is missing in the environment variables.');
  process.exit(1);
}

app.use('/public', express.static(path.join(__dirname, 'public')));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/api/movies', moviesRouter);
app.use('/api/tvseries', tvseriesRouter);
app.use('/api/users', userRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
