import React, { useState } from "react";
import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE;

import "../styles/PopupForm.css";

const categories = [
  "Web Development",
  "Machine Learning",
  "Blockchain",
  "Programming",
  "Data Science",
  "System Design",
  "Competitive Coding",
  "Open Source",
  "Other",
];

const AddArticle = ({ onClose, onArticleAdded }) => {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    author: "Sanjoy Chattopadhyay",
    tag: "",
    category: categories[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const calculateWordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wordCount = calculateWordCount(form.content);
    const readTime = `${Math.ceil(wordCount / 200)} min`;

    if (wordCount < 10) {
      alert("❌ Content too short. Minimum 10 words required.");
      return;
    }

    try {
      const payload = {
        ...form,
        tag: form.tag.split(",").map((t) => t.trim()),
        wordCount,
        readTime,
      };

      const res = await axios.post(`${API_BASE}/article`, payload);
      onArticleAdded(res.data);
      onClose();
    } catch (err) {
      console.error("Error submitting article:", err.message);
      alert("❌ Failed to submit article. Please try again.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="popup-title">Add Article</h2>

        <form onSubmit={handleSubmit} className="popup-form">
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              type="text"
            />
          </div>

          {/* Summary */}
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              name="summary"
              value={form.summary}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          {/* Content */}
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
              rows={6}
              required
            />
          </div>

          {/* Author */}
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              required
              type="text"
            />
          </div>

          {/* Tags */}
          <div className="form-group">
            <label htmlFor="tag">Tags (comma-separated)</label>
            <input
              id="tag"
              name="tag"
              value={form.tag}
              onChange={handleChange}
              type="text"
              placeholder="e.g., react, hooks, frontend"
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
