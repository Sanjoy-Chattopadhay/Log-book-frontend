import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddProject from "./AddProject";
// import { API_BASE } from "../../server/utils/api.js";
const API_BASE = import.meta.env.VITE_API_BASE;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const handleProjectAdded = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setShowPopup(false);
  };

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
          onClick={() => setShowPopup(true)}
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
      ) : projects.length === 0 ? (
        <p>No projects found. Click the "Add Project" button to create one!</p>
      ) : (
        projects.map((project) => (
          <Card key={project._id} data={project} type="projects" />
        ))
      )}

      {/* Popup */}
      {showPopup && (
        <AddProject
          onClose={() => setShowPopup(false)}
          onProjectAdded={handleProjectAdded}
        />
      )}
    </div>
  );
};

export default Projects;
