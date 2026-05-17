const express = require('express');

const router = express.Router();

const Question = require('../models/questionModel');

router.get('/:subject', async (req, res) => {
  try {
    const questions = await Question.find({
      subject: req.params.subject,
    });

    const shuffled = questions.sort(
      () => Math.random() - 0.5,
    );

    res.json(shuffled.slice(0, 30));
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;