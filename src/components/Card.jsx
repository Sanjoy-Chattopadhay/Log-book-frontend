import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, CalendarClock, Clock, Folder } from "lucide-react";
import "../styles/CardStyle.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const formatDate = (iso) => new Date(iso).toLocaleDateString("en-GB");

const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text || "";
  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  return truncated.substring(0, lastSpaceIndex) + "...";
};

const Card = ({ data, type }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">
        <Link to={`/${type}/${data._id}`}>{data.title}</Link>
      </h2>

      <div className="card-meta">
        <span className="meta-item">
          <CalendarDays size={14} />
          {formatDate(data.createdAt)}
        </span>
        <span className="meta-item">
          <CalendarClock size={14} />
          {formatDate(data.updatedAt)}
        </span>
        <span className="meta-item">
          <Clock size={14} />
          {data.readTime}, {data.wordCount} words
        </span>
        <span className="meta-item">
          <Folder size={14} />
          {data.category}
        </span>
      </div>

      <div className="summary-container">
        <p className="summary-text">{truncateText(data.summary)}</p>
        <Link
          className="read-more-btn summary-read-more"
          to={`/${type}/${data._id}`}
        >
          <span>Read More</span>
        </Link>
      </div>

      {Array.isArray(data.tags) && data.tags.length > 0 && (
        <div className="card-tags">
          {data.tags.map((tag, idx) => (
            <span key={idx} className="card-tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
