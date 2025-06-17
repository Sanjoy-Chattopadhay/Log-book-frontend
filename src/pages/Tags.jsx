import React, { useEffect, useState } from "react";
import "../styles/Tags.css";
import { Link } from "react-router-dom";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const TagsPage = () => {
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
    <div className="tags-container">
      <h2 className="tags-heading">All Tags</h2>
      <div className="tags-list">
        {tags.map(({ tag, count }, idx) => (
          <Link key={idx} to={`/tags/${tag}`} className="tag-chip">
            {tag} <span style={{ color: "#1677ff", margin: "0 4px" }}>|</span>{" "}
            {count}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
