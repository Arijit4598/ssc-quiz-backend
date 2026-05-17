const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subject: String,

  unit: String,

  question: String,

  options: [String],

  correctAnswer: String,

  explanation: String,
});

module.exports = mongoose.model(
  'Question',
  questionSchema,
);