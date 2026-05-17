const mongoose = require('mongoose');

const learningSchema =
  new mongoose.Schema({
    subject: String,

    title: String,

    pdfUrl: String,

    thumbnail: String,
  });

module.exports = mongoose.model(
  'Learning',
  learningSchema,
);