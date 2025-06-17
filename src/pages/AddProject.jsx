import React, { useState } from "react";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api.js";
const API_BASE = import.meta.env.VITE_API_BASE;

import "../styles/PopupForm.css";

const AddProject = ({ onClose = () => {}, onProjectAdded = () => {} }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    tags: "",
    techStack: "",
    status: "Ongoing",
  });

  const requiredFields = ["title", "description", "link"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tagsArr = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const techStackArr = form.techStack
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    try {
      const res = await axios.post(`${API_BASE}/project`, {
        ...form,
        tags: tagsArr,
        techStack: techStackArr,
      });

      onProjectAdded(res.data);
      onClose();
    } catch {
      alert("Error creating project.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {" "}
        {/* FIXED */}
        <button
          className="popup-close-btn" // FIXED
          onClick={onClose}
          aria-label="Close Popup"
        >
          ×
        </button>
        <h2 className="popup-title">Add Project</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          {["title", "description", "link", "tags", "techStack"].map(
            (field) => (
              <div key={field} className="form-group">
                <label htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                  {requiredFields.includes(field) && (
                    <span className="required">*</span>
                  )}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  required={requiredFields.includes(field)}
                  placeholder={
                    field === "tags" || field === "techStack"
                      ? "Comma-separated values"
                      : ""
                  }
                />
              </div>
            )
          )}

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Stalled">Stalled</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
