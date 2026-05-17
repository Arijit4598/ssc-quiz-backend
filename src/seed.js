require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = require('./config/db');

const Learning = require(
  './models/learningModel',
);

const learningData = require(
  './data/learningData',
);

const importData = async () => {
  try {
    await connectDB();

    await Learning.deleteMany();

    await Learning.insertMany(
      learningData,
    );

    console.log(
      'Learning Data Imported',
    );

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

importData();