const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Example Route
app.get('/', (req, res) => {
  res.send('Welcome to the Digital Heritage API');
});

const heritageRoutes = require('./routes/api/heritageRoutes');
app.use('/api/heritage', heritageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
