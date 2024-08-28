import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border border-navy p-4 rounded">
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <img
              src={`http://localhost:5000${blog.imageUrl}`}
              alt={blog.title}
              className="mt-2 w-full rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
