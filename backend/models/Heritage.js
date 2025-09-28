const mongoose = require('mongoose');

const HeritageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
  location: { type: String },
});

module.exports = mongoose.model('Heritage', HeritageSchema);
