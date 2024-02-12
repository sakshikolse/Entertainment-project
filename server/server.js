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


if (!MONGODB_URI) {
  console.error('MongoDB connection string is missing in the environment variables.');
  process.exit(1);
}

app.use('/public', express.static(path.join(__dirname, 'public')));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));


app.use('/api/movies', moviesRouter);
app.use('/api/tvseries', tvseriesRouter);
app.use('/api/users', userRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
