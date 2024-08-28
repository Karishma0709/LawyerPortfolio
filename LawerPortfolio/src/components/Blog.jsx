import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/api/blogs");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <div className="space-y-4">
        {allImage == null
          ? " "
          : allImage.map((blog) => (
              <div
                key={blog._id}
                className="flex sm:justify-between justify-items-center  text-center items-center flex-col sm:flex-row border border-navy p-4 rounded "
              >
                <img
                  src={`http://localhost:5000/Blogfiles/${blog.pdf}`}
                  alt={blog.title}
                  className="mt-2 rounded w-[50%] sm:p-20"
                />

                <div className="w-[50%] sm:p-10 flex text-center sm:text-justify flex-col">
                  <h3 className="text-4xl sm:text-yellow-500 text-white  font-bold mb-6 sm:mb-12 mt-5 sm:mt-0 underline ">
                    {blog.title}
                  </h3>
                  <div className="w-[400px] text-white text-center mb-5">
                    {blog.description}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
