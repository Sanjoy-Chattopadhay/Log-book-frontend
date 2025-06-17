import React, { useState } from "react";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api"; // ✅ FIXED: Import API base
const API_BASE = import.meta.env.VITE_API_BASE;

const AddProjectComment = ({ projectId, onAdded }) => {
  const [form, setForm] = useState({ author: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/project/${projectId}/comment`, form);
      setForm({ author: "", content: "" });
      onAdded();
    } catch (err) {
      console.error(
        "Failed to post comment:",
        err.response?.data || err.message
      );
      alert("Error posting comment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h4>Add a comment</h4>
      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Your name"
        required
        style={inputStyle}
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Your comment"
        rows={3}
        required
        style={textareaStyle}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

const inputStyle = { width: "100%", padding: "8px", marginBottom: "0.5rem" };
const textareaStyle = { width: "100%", padding: "8px", marginBottom: "0.5rem" };

export default AddProjectComment;
