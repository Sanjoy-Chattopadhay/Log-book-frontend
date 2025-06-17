import React, { useState } from "react";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api.js";
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
      alert("Content is too short. Please write at least 10 words.");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE}/article`, {
        ...form,
        tag: form.tag.split(",").map((t) => t.trim()),
        wordCount,
        readTime,
      });

      onArticleAdded(res.data);
      onClose();
    } catch (err) {
      console.error("Error submitting article:", err.message);
      alert("❌ Error submitting article.");
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
          {["title", "summary", "content", "author", "tag"].map((field) => (
            <div key={field} className="form-group">
              <label htmlFor={field}>
                {field === "tag"
                  ? "Tags (comma-separated)"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <textarea
                id={field}
                rows={field === "summary" || field === "content" ? 5 : 1}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              id="category"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Submit Article
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
