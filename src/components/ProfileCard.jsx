import React, { useEffect, useState } from "react";
import "../styles/ProfileCard.css";
import { useNavigate } from "react-router-dom";
// import { API_BASE } from "../../server/utils/api.js";
const API_BASE = import.meta.env.VITE_API_BASE;

function ProfileCard() {
  const navigate = useNavigate();
  const [postCounts, setPostCounts] = useState({
    total: 0,
    blogs: 0,
    articles: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch(`${API_BASE}/stats/count-all`);
        const data = await res.json();
        setPostCounts(data);
      } catch (err) {
        console.error("Failed to load post counts", err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="profile-wrapper">
      {/* Card 1: Profile */}
      <div className="profile-card">
        <img
          src="https://i.postimg.cc/0NQKcV7M/coverimage.jpg"
          alt="Sanjoy Chattopadhyay"
          className="profile-img"
        />
        <h2>Sanjoy Chattopadhyay</h2>
        <div className="subtitle">
          <span className="chip">Web3 </span>
          <span className="dot">• </span>
          <span className="chip">Machine Learning </span>
          <span className="dot">• </span>
          <span className="chip">Computer Science</span>
        </div>

        <p className="location">
          <i className="fas fa-map-marker-alt"></i> Durgapur, India
        </p>
        <div className="stats">
          <div>
            <div className="stat-number">{postCounts.total}</div>
            <div className="stat-label">POSTS</div>
          </div>
          <div>
            <div className="stat-number">{postCounts.blogs}</div>
            <div className="stat-label">BLOGS</div>
          </div>
          <div>
            <div className="stat-number">{postCounts.articles}</div>
            <div className="stat-label">ARTICLES</div>
          </div>
        </div>
        <div className="buttons">
          <a
            className="btn gray-blue"
            href="https://github.com/Sanjoy-Chattopadhay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> Follow
          </a>

          <a
            className="btn gray-blue"
            href="upi://pay?pa=chatterjeesanjoy347-3@okhdfcbank&pn=Sanjoy%20Chattopadhyay&cu=100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-heart"></i> Sponsor
          </a>
        </div>

        <div className="icons">
          <a
            href="https://github.com/Sanjoy-Chattopadhay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sanjoy-chattopadhyay-390b3a1a6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:chatterjeesanjoy347@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.instagram.com/sanjoy_chattopadhyay_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/chattopadhybh4g/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GeeksforGeeks"
          >
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>

      {/* Card 2: Actions */}
      {/* <div className="action-card">
        <button className="btn gray-blue" onClick={() => navigate("/create")}>
          Write a Blog
        </button>
        <button
          className="btn gray-blue"
          onClick={() => navigate("/add-article")}
        >
          Add an Article
        </button>
        <button
          className="btn gray-blue"
          onClick={() => navigate("/add-project")}
        >
          Upload a Project
        </button>
      </div> */}

      <div className="email-subscribe-card">
        <p className="email-subscribe-title">Send me a message</p>
        <form
          className="email-form"
          onSubmit={(e) => {
            e.preventDefault();
            const message = e.target.message.value.trim();
            if (!message) return;
            const mailto = `mailto:chattopadhyaysanjoy18@gmail.com?subject=Hello%20Sanjoy&body=${encodeURIComponent(
              message
            )}`;
            window.location.href = mailto;
          }}
        >
          <textarea
            name="message"
            className="email-input"
            rows="4"
            placeholder="Hi Sanjoy, I wanted to say..."
            required
          ></textarea>
          <button type="submit" className="btn gray-blue">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
