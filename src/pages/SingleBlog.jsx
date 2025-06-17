import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-GB");

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`${API_BASE}/blog/${id}`)
      .then((res) => {
        setBlog(res.data);
        setError("");
      })
      .catch(() => {
        setError("Blog not found or failed to load.");
      });
  }, [id]);

  const handleProtectedDelete = async () => {
    const password = prompt("Enter password to delete:");
    if (!password) return;

    try {
      const res = await axios.post(`${API_BASE}/api/delete/blog/${id}`, {
        password,
      });

      if (res.data.success) {
        alert("Blog deleted successfully.");
        navigate("/blog"); // redirect to blog list
      } else {
        alert("Wrong password or deletion failed.");
      }
    } catch (err) {
      alert("Error deleting blog.");
    }
  };

  if (error) return <p style={{ color: "red", padding: "2rem" }}>{error}</p>;
  if (!blog) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>{blog.title}</h1>
      <p style={{ fontStyle: "italic", color: "#666" }}>
        By {blog.author} • {blog.readTime} • {blog.wordCount} words
      </p>
      <p style={{ color: "#444" }}>
        Created: {formatDate(blog.createdAt)} | Updated:{" "}
        {formatDate(blog.updatedAt)}
      </p>
      <p>
        <strong>Tag:</strong> {blog.tag}
      </p>
      <p>
        <strong>Category:</strong> {blog.category}
      </p>
      <hr />
      <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.7 }}>{blog.content}</p>

      {/* 🔴 DELETE BUTTON BELOW */}
      <div style={{ marginTop: "2rem" }}>
        <button className="delete-btn" onClick={handleProtectedDelete}>
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
