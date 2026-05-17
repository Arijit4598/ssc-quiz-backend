const express = require('express');

const router = express.Router();

const Learning = require(
  '../models/learningModel',
);

router.get('/', async (req, res) => {
  try {
    const data = await Learning.find();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;