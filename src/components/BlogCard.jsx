import React from "react";
import "../css/blog.css";

const BlogCard = ({ title, date, summary, image, onClick }) => {
  return (
    <div className="blog-card-modern" onClick={onClick}>
      <div className="blog-card-image-wrapper">
        <img src={image} alt={title} className="blog-card-modern-image" />
      </div>
      <div className="blog-card-modern-content">
        <h3 className="blog-card-modern-title">{title}</h3>
        <p className="blog-card-modern-date">{date}</p>
        <p className="blog-card-modern-summary">{summary}</p>
        <button className="blog-card-modern-button">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
