import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddProject from "./AddProject";
import "../styles/PopupForm.css";

const API_BASE = import.meta.env.VITE_API_BASE;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${API_BASE}/project`);
      const projectList = Array.isArray(res.data)
        ? res.data
        : res.data?.projects || [];
      setProjects(projectList);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch projects.");
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setShowForm(false);
    setPage(1);
  };

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIdx = (page - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIdx, startIdx + projectsPerPage);

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
        <h1 style={{ fontFamily: "PT Sans Narrow, sans-serif" }}>Projects</h1>
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
          + Add Project
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={fetchProjects}
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
      ) : projects.length > 0 ? (
        <>
          {currentProjects.map((project) => (
            <div
              key={project._id || project.id}
              style={{ marginBottom: "1.5rem" }}
            >
              <Card data={project} type="projects" />
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
        <p>No projects found. Click the "Add Project" button to create one!</p>
      )}

      {/* Popup Form */}
      {showForm && (
        <AddProject
          onClose={handleCloseForm}
          onProjectAdded={handleNewProject}
        />
      )}
    </div>
  );
};

export default Projects;
