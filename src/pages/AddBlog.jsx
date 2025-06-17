import React, { useState } from "react";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api.js";
const API_BASE = import.meta.env.VITE_API_BASE;

import "../styles/PopupForm.css";

const AddBlog = ({ onClose, onBlogAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    tags: "",
    category: "Tech",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(",").map((tag) => tag.trim()),
      };

      const res = await axios.post(`${API_BASE}/blog`, payload);

      onBlogAdded(res.data);
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create blog");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close-btn" onClick={onClose} type="button">
          &times;
        </button>

        <h2 className="popup-title">Create Blog</h2>

        {error && <p className="popup-error">{error}</p>}

        <form onSubmit={handleSubmit} className="popup-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={6}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Tech">Tech</option>
              <option value="Life">Life</option>
              <option value="Travel">Travel</option>
              <option value="Career">Career</option>
              <option value="Education">Education</option>
              <option value="Productivity">Productivity</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
