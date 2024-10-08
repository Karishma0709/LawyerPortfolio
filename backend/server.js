require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const { router } = require('./routes/auth');
const contactRoutes = require('./routes/contactRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/Blogfiles', express.static('Blogfiles'));

app.get('/', (req, res) => {
  res.send('Server is running!');
});



// Routes
app.use('/api', contactRoutes);
app.use('/api', blogRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
