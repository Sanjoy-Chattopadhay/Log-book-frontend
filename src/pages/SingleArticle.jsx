import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB");
};

const SingleArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`${API_BASE}/article/${id}`);
        setArticle(res.data);
        setError("");
      } catch (err) {
        console.error("Failed to fetch article:", err.message);
        setError("Article not found or failed to load.");
      }
    };

    fetchArticle();
  }, [id]);

  const handleProtectedDelete = async () => {
    const password = prompt("Enter password to delete this article:");
    if (!password) return;

    try {
      const res = await axios.post(`${API_BASE}/api/delete/article/${id}`, {
        password,
      });

      if (res.data.success) {
        alert("Article deleted successfully.");
        navigate("/articles");
      } else {
        alert("Wrong password or deletion failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting article.");
    }
  };

  if (error)
    return (
      <p style={{ padding: "2rem", color: "red", fontWeight: "bold" }}>
        {error}
      </p>
    );

  if (!article) return <p style={{ padding: "2rem" }}>Loading article...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {article.title}
      </h1>

      <p style={{ fontStyle: "italic", color: "#666", marginBottom: "0.5rem" }}>
        By {article.author} &nbsp;&nbsp;
        {article.readTime} min read • {article.wordCount} words
      </p>

      <p style={{ marginBottom: "0.5rem", color: "#333" }}>
        Created: {formatDate(article.createdAt)} | Updated:{" "}
        {formatDate(article.updatedAt)}
      </p>

      <p style={{ marginBottom: "0.5rem" }}>
        <strong>Tags:</strong>{" "}
        {article.tag?.length > 0 ? article.tag.join(", ") : "None"}
      </p>

      {article.category && (
        <p style={{ marginBottom: "1rem" }}>
          <strong>Category:</strong> {article.category}
        </p>
      )}

      <button
        onClick={handleProtectedDelete}
        style={{
          backgroundColor: "#d9534f",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          marginTop: "1rem",
          cursor: "pointer",
        }}
      >
        🗑️ Delete Article
      </button>

      <hr style={{ marginBottom: "1rem", marginTop: "2rem" }} />

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.7",
          whiteSpace: "pre-wrap",
        }}
      >
        {article.content}
      </p>
    </div>
  );
};

export default SingleArticle;
