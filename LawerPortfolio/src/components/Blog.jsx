import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  //   const [blogs, setBlogs] = useState([]);

  //   useEffect(() => {
  //     const fetchBlogs = async () => {
  //       const response = await fetch("http://localhost:5000/api/blogs");
  //       const data = await response.json();
  //       setBlogs(data);
  //     };

  //     fetchBlogs();
  //   }, []);

  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/api/blogs");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const showPdf = (pdf) => {
    window.open(
      `http://localhost:5000/api/blogs/${pdf}`,
      "_blank",
      "noreferrer"
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {allImage == null
          ? " "
          : allImage.map((blog) => (
              <div key={data._id} className="border border-navy p-4 rounded">
                <h3 className="text-lg font-bold">{data.title}</h3>
                <img
                  src={data.pfd}
                  alt={data.title}
                  className="mt-2 w-full rounded"
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
