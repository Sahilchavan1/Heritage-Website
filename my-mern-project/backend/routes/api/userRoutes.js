const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Store user data on login
router.post('/login', async (req, res) => {
  const { username, email, wishlist } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (user) {
      user.wishlist = wishlist;
      await user.save();
    } else {
      user = new User({ username, email, wishlist });
      await user.save();
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user data by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete user data
router.delete('/delete', async (req, res) => {
  const { email } = req.body;

  try {
    await User.findOneAndDelete({ email });
    res.status(200).json({ message: 'User data deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
