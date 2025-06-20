import React, { useEffect, useState } from "react";
import "../styles/Sidebar.css";

const API_BASE = import.meta.env.VITE_API_BASE;

const ArchivesCard = () => {
  const [archives, setArchives] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchArchives = async () => {
      try {
        const res = await fetch(`${API_BASE}/archivestats/archive-counts`);
        const data = await res.json();
        setArchives(data);
      } catch (err) {
        console.error("Failed to fetch archives:", err);
      }
    };

    fetchArchives();
  }, []);

  const visibleArchives = showAll ? archives : archives.slice(0, 6);

  return (
    <div className="card">
      <h3>Archives</h3>
      {archives.length === 0 ? (
        <p style={{ fontSize: 13, color: "#888" }}>
          No archive data available.
        </p>
      ) : (
        visibleArchives.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 14,
              color: "#444",
              marginBottom: 10,
            }}
          >
            <span>{item.month}</span>
            <span
              style={{
                backgroundColor: "#eee",
                borderRadius: 5,
                padding: "2px 6px",
                fontSize: 12,
              }}
            >
              {item.count}
            </span>
          </div>
        ))
      )}

      {archives.length > 6 && (
        <div
          style={{
            marginTop: 10,
            fontSize: 13,
            color: "#0066cc",
            cursor: "pointer",
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less <<" : "Show More >>"}
        </div>
      )}
    </div>
  );
};

export default ArchivesCard;
