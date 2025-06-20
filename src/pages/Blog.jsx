import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddBlog from "./AddBlog.jsx";
import "../styles/PopupForm.css";

const API_BASE = import.meta.env.VITE_API_BASE;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [page, setPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${API_BASE}/blog`);
      const blogList = Array.isArray(res.data)
        ? res.data
        : res.data?.blogs || [];

      setBlogs(blogList);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch blogs.");
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewBlog = (newBlog) => {
    setBlogs((prev) => [newBlog, ...prev]);
    setShowForm(false);
    setPage(1); // reset to first page
  };

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIdx = (page - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", position: "relative" }}>
      {/* Header with title and button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontFamily: "PT Sans Narrow, sans-serif" }}>Blogs</h1>
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
          + Add Blog
        </button>
      </div>

      {/* Blog List */}
      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={fetchBlogs}
            style={{
              padding: "8px 16px",
              backgroundColor: "#1e88e5",
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
      ) : blogs.length > 0 ? (
        <>
          {currentBlogs.map((blog) => (
            <div key={blog._id || blog.id} style={{ marginBottom: "1.5rem" }}>
              <Card data={blog} type="blog" />
            </div>
          ))}

          {/* Pagination Controls */}
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
        <p>
          No blogs found. Click the "Add Blog" button to create your first blog!
        </p>
      )}

      {/* Add Blog Form Popup */}
      {showForm && (
        <AddBlog onClose={handleCloseForm} onBlogAdded={handleNewBlog} />
      )}
    </div>
  );
};

export default Blog;
