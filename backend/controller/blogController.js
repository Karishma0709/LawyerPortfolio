const Blog = require('../model/blog');
const path = require('path');
const fs = require('fs');

exports.createBlogPost = async (req, res) => {
  try {
    const { title } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    const newBlog = new Blog({
      title,
      imageUrl: `/uploads/${image.filename}`,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getBlogPosts = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
