import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import "../styles/RecentsCard.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const RecentsCard = () => {
  const [recents, setRecents] = useState([]);

  const endpoints = [
    { url: "/blog", type: "BLOG" },
    { url: "/article", type: "ARTICLE" },
    { url: "/project", type: "PROJECT" },
    { url: "/life", type: "LIFE" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allItems = [];

        for (const { url, type } of endpoints) {
          const res = await axios.get(`${API_BASE}${url}`);
          const data = Array.isArray(res.data) ? res.data : [];

          const formatted = data.map((item) => ({
            id: item._id,
            date: item.createdAt,
            title: item.title,
            type,
          }));

          allItems.push(...formatted);
        }

        const sorted = allItems
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);

        setRecents(sorted);
      } catch (err) {
        console.error("🔥 Error fetching recents:", err);
      }
    };

    fetchData();
  }, []);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-GB"); // DD/MM/YYYY
  };

  const getPath = (type, id) => {
    switch (type) {
      case "BLOG":
        return `/blog/${id}`;
      case "ARTICLE":
        return `/articles/${id}`;
      case "PROJECT":
        return `/projects/${id}`;
      case "LIFE":
        return `/life/${id}`;
      default:
        return "/";
    }
  };

  return (
    // return (
    <div className="card">
      <h3>Recents</h3>
      {recents.map((item, i) => (
        <Link key={i} to={getPath(item.type, item.id)}>
          <div className="card-entry">
            <p className="date">{formatDate(item.date)}</p>
            <p className="title">{item.title}</p>
            <p className="type">{item.type}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentsCard;
