import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddArticle from "./AddArticle";
// import { API_BASE } from "../../server/utils/api.js";
const API_BASE = import.meta.env.VITE_API_BASE;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${API_BASE}/article`);
      const articleList = Array.isArray(res.data)
        ? res.data
        : res.data?.articles || [];
      setArticles(articleList);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch articles.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleArticleAdded = (newArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
    setShowPopup(false);
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", position: "relative" }}>
      {/* Header with title and Add Article button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontFamily: "PT Sans Narrow, sans-serif" }}>Articles</h1>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            backgroundColor: "#43a047",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            fontSize: "16px",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          + Add Article
        </button>
      </div>

      {loading ? (
        <p>Loading articles...</p>
      ) : error ? (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={fetchArticles}
            style={{
              padding: "8px 16px",
              backgroundColor: "#43a047",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Retry
          </button>
        </div>
      ) : articles.length === 0 ? (
        <p>No articles found. Click the "Add Article" button to create one!</p>
      ) : (
        articles.map((article) => (
          <Card
            key={article._id || article.id}
            data={article}
            type="articles"
          />
        ))
      )}

      {showPopup && (
        <AddArticle
          onClose={() => setShowPopup(false)}
          onArticleAdded={handleArticleAdded}
        />
      )}
    </div>
  );
};

export default Articles;
