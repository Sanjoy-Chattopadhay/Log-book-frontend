import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CommunityWall.css";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const CommunityWall = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    author: "",
    content: "",
  });

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/community`);
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    if (!newPost.author.trim() || !newPost.content.trim()) return;
    try {
      await axios.post(`${API_BASE}/community`, newPost);
      setNewPost({ author: "", content: "" });
      fetchPosts();
    } catch (err) {
      console.error("Error submitting post:", err);
    }
  };

  const handleLike = async (id) => {
    try {
      await axios.post(`${API_BASE}/community/${id}/like`);
      fetchPosts();
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  const handleDislike = async (id) => {
    try {
      await axios.post(`${API_BASE}/community/${id}/dislike`);
      fetchPosts();
    } catch (err) {
      console.error("Error disliking post:", err);
    }
  };

  return (
    <div className="community-container">
      <h2>🧱 Community Wall</h2>

      <div className="post-form">
        <textarea
          placeholder="What's on your mind?"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          placeholder="Your name"
          value={newPost.author}
          onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
        />
        <button onClick={handleSubmit}>Post</button>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-header">
              <strong>{post.author}</strong>
              <span className="timestamp">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button onClick={() => handleLike(post._id)}>👍</button>
              <span>{post.likes || 0}</span>
              <button onClick={() => handleDislike(post._id)}>👎</button>
              <span>{post.dislikes || 0}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityWall;
