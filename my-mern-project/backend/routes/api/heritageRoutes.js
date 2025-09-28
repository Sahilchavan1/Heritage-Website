const express = require('express');
const router = express.Router();
const Heritage = require('../../models/Heritage');

// Get all heritage items
router.get('/', async (req, res) => {
  try {
    const heritageItems = await Heritage.find();
    res.json(heritageItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add other CRUD routes here

module.exports = router;
