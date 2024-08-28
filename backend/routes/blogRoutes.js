const express = require('express');
const multer = require('multer');
const { createBlogPost, getBlogPosts } = require('../controller/blogController');

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post('/blogs', upload.single('image'), createBlogPost);
router.get('/blogs', getBlogPosts);

module.exports = router;
