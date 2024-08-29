import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("https://lawyerportfolio-backend.onrender.com/api/blogs");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  return (
    <div className="p-6 bg-blog">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Blog Posts</h2>
      <div className="space-y-4">
        {allImage == null
          ? " "
          : allImage.map((blog) => (
              <div
                key={blog._id}
                className="flex sm:justify-between justify-items-center text-center items-center flex-col sm:flex-row border border-navy p-4 rounded"
              >
                <img
                  src={`https://lawyerportfolio-backend.onrender.com/Blogfiles/${blog.pdf}`}
                  alt={blog.title}
                  className="mt-2 rounded sm:w-1/2 w-full sm:p-10"
                />

                <div className="flex flex-col sm:p-10 p-4 px-8 text-center sm:w-1/2 w-full">
                  <h3 className="text-4xl sm:text-yellow-500 text-white font-bold mb-6 sm:mb-12 mt-5 sm:mt-0 underline">
                    {blog.title}
                  </h3>
                  <div className="items-center text-center">
                    <p className="text-white text-center mb-5 break-words">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
