import React from "react";
import "../css/blog.css";

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="blog-modal-overlay" onClick={onClose}>
      <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
        <button className="blog-close" onClick={onClose}>
          ×
        </button>
        <img src={blog.image} alt={blog.title} className="blog-modal-image" />
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-date">{blog.date}</p>
        <p className="blog-content">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogModal;
