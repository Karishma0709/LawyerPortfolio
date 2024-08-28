import React, { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle blog post submission logic here
    console.log({ title, image });
  };

  return (
    <div id="blog-form" className="p-6">
      <h2 className="text-xl font-bold mb-4">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-navy font-bold mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-navy rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-navy font-bold mb-2" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            className="w-full p-2 border border-navy rounded"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="bg-navy text-white py-2 px-4 rounded hover:bg-yellow hover:text-navy">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
