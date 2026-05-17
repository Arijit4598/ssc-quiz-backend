const express = require('express');

const cors = require('cors');

require('dotenv').config();

const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SSC Quiz API Running');
});

const questionRoutes = require(
  './routes/questionRoutes',
);

app.use('/api/questions', questionRoutes);

const learningRoutes = require(
  './routes/learningRoutes',
);

app.use('/api/learning', learningRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`,
  );
});