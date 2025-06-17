import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardStyle.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString("en-GB") : "N/A";

const BlogCard = ({ blog }) => {
  if (!blog) return null; // Safety check

  const {
    _id,
    title,
    createdAt,
    updatedAt,
    readTime,
    wordCount,
    summary,
    category,
    tags,
  } = blog;

  return (
    <div className="card-container">
      <h2 className="card-title">
        <Link to={`/blog/${_id}`}>{title}</Link>
      </h2>

      <div className="card-meta">
        <span className="card-icon-text">
          <span className="meta-icon">📅</span> {formatDate(createdAt)}
        </span>
        <span className="card-icon-text">
          <span className="meta-icon">🛠️</span> {formatDate(updatedAt)}
        </span>
        <span className="card-icon-text">
          <span className="meta-icon">⏱</span> {readTime}, {wordCount} words
        </span>
      </div>

      <p className="card-summary">{summary}</p>

      <div className="card-tags">
        <strong>{category}</strong>
        {Array.isArray(tags) && tags.length > 0 && (
          <span className="tag-list">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag-item">
                #{tag}
              </span>
            ))}
          </span>
        )}
      </div>

      <div className="card-footer">
        <Link className="read-more-btn" to={`/blog/${_id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
