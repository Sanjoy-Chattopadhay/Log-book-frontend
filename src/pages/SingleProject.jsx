import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import AddProjectComment from "./AddProjectComment.jsx";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const SingleProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get(`${API_BASE}/project/${id}`)
      .then((res) => {
        setProject(res.data.project);
        setComments(res.data.comments);
      })
      .catch(() => setError("Failed to load project."));
  };

  useEffect(fetchData, [id]);

  const handleProtectedDelete = async () => {
    const password = prompt("Enter password to delete this project:");
    if (!password) return;

    try {
      // const res = await axios.post(`/api/delete/project/${id}`, { password });

      const res = await axios.post(`${API_BASE}/api/delete/project/${id}`, {
        password,
      });

      if (res.data.success) {
        alert("Project deleted successfully.");
        navigate("/projects"); // Navigate back to projects page
      } else {
        alert("Wrong password or deletion failed.");
      }
    } catch (err) {
      alert("Error deleting project.");
    }
  };

  if (error) return <p style={{ color: "red", padding: "2rem" }}>{error}</p>;
  if (!project) return <p style={{ padding: "2rem" }}>Loading project...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      {project.link && (
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            🔗 View Project
          </a>
        </p>
      )}

      {project.status && (
        <p>
          <strong>Status:</strong> {project.status}
        </p>
      )}

      {project.techStack?.length > 0 && (
        <p>
          <strong>Tech Stack:</strong> {project.techStack.join(", ")}
        </p>
      )}

      {project.tags?.length > 0 && (
        <p>
          <strong>Tags:</strong> {project.tags.join(", ")}
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
        🗑️ Delete Project
      </button>

      <hr />

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c) => (
          <div key={c._id} style={commentStyle}>
            <p>
              <strong>{c.author}</strong> on{" "}
              {new Date(c.createdAt).toLocaleString()}
            </p>
            <p>{c.content}</p>
          </div>
        ))
      )}

      <AddProjectComment projectId={id} onAdded={fetchData} />
    </div>
  );
};

const commentStyle = {
  background: "#f9f9f9",
  padding: "0.5rem",
  borderRadius: "4px",
  marginTop: "0.5rem",
};

export default SingleProject;
