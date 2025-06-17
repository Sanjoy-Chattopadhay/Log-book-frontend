import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const TagsCard = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(`${API_BASE}/archivestats/all-tags`);
        const data = await res.json();
        setTags(data);
      } catch (err) {
        console.error("Failed to fetch tags:", err);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="card">
      <h3>Tags</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map(({ tag, count }, i) => (
          <div
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              padding: "6px 12px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#555", marginRight: "6px" }}>#{tag}</span>
            <span style={{ color: "#1677ff" }}>{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsCard;
