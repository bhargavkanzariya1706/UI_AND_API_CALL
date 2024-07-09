import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../Api";
 
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      setBlogs(data.data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
       <div>
        <div className="Blogs-header text-start">
          <h1>Blogs</h1>
        </div>
        <div className="blog-section">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-post">
              <img
                src={blog.image_url}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-details">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-date">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="blog-author">by {blog.name}</p>
                <p className="blog-content">{blog.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     </>
  );
};

export default Blogs;
