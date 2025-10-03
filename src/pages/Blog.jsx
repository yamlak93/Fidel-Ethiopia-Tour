import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogModal from "../components/BlogModal";
import blogData from "../data/blogData";
import "../css/blog.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <Navbar />
      <section className="blog-section">
        <div className="blog-header">
          <h2>Fidel Ethiopia Blog</h2>
          <p>Stories, insights, and travel inspiration from across Ethiopia.</p>
        </div>
        <div className="blog-grid">
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              summary={blog.summary}
              image={blog.image}
              onClick={() => setSelectedBlog(blog)}
            />
          ))}
        </div>
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      </section>
      <Footer />
    </>
  );
};

export default Blog;
