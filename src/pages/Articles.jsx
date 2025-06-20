import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddArticle from "./AddArticle";
import "../styles/PopupForm.css"; // Use the same styling as blog for consistency

const API_BASE = import.meta.env.VITE_API_BASE;

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const articlesPerPage = 5;

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

  const handleNewArticle = (newArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
    setShowForm(false);
    setPage(1);
  };

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIdx = (page - 1) * articlesPerPage;
  const currentArticles = articles.slice(startIdx, startIdx + articlesPerPage);

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", position: "relative" }}>
      {/* Header */}
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
          onClick={handleOpenForm}
          style={{
            backgroundColor: "#1e88e5",
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

      {/* Main Content */}
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
      ) : articles.length > 0 ? (
        <>
          {currentArticles.map((article) => (
            <div
              key={article._id || article.id}
              style={{ marginBottom: "1.5rem" }}
            >
              <Card data={article} type="articles" />
            </div>
          ))}

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
              gap: "1rem",
              fontWeight: "500",
            }}
          >
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              style={{
                padding: "6px 12px",
                backgroundColor: "#1e88e5",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: page === 1 ? "not-allowed" : "pointer",
                opacity: page === 1 ? 0.6 : 1,
              }}
            >
              ← Prev
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              style={{
                padding: "6px 12px",
                backgroundColor: "#1e88e5",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: page === totalPages ? "not-allowed" : "pointer",
                opacity: page === totalPages ? 0.6 : 1,
              }}
            >
              Next →
            </button>
          </div>
        </>
      ) : (
        <p>No articles found. Click the "Add Article" button to create one!</p>
      )}

      {/* Add Article Form */}
      {showForm && (
        <AddArticle
          onClose={handleCloseForm}
          onArticleAdded={handleNewArticle}
        />
      )}
    </div>
  );
};

export default Articles;
