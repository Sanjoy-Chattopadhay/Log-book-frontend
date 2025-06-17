import React, { useState, useEffect } from "react";
// import { API_BASE } from "../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import "./App.css";
// Components & Pages
import MainContent from "./components/MainContent.jsx";
import Curriculum from "./pages/Curriculum.jsx";
import Blog from "./pages/Blog.jsx";
import Articles from "./pages/Articles.jsx";
import Publications from "./pages/Publications.jsx";
// import Readings from "./pages/Readings.jsx";
// import Life from "./pages/Life.jsx";
// import Essay from "./pages/Essay.jsx";
// import Photography from "./pages/Photography.jsx";
// import Archives from "./pages/Archives.jsx";
// import Categories from "./pages/Categories.jsx";
import Tags from "./pages/Tags.jsx";
// import FAQs from "./pages/FAQs.jsx";
import AddBlog from "./pages/AddBlog.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import AddArticle from "./pages/AddArticle.jsx";
import SingleArticle from "./pages/SingleArticle.jsx";
import Projects from "./pages/Projects.jsx";
import SingleProject from "./pages/SingleProject.jsx";
import AddProject from "./pages/AddProject.jsx";
// Add these imports
// import SingleLife from "./pages/SingleLife.jsx";
// import AddLife from "./pages/AddLife.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import CommunityWall from "./pages/CommunityWall.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme to body element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Optional: Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  // Save theme preference and toggle
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    console.log("Theme toggled. New value:", newDarkMode);
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div style={{ paddingTop: "20px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <MainContent />
              </Home>
            }
          />
          <Route
            path="/curriculum"
            element={
              <Home>
                <Curriculum />
              </Home>
            }
          />
          <Route
            path="/blog"
            element={
              <Home>
                <Blog />
              </Home>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Home>
                <SingleBlog />
              </Home>
            }
          />
          <Route path="/create" element={<AddBlog />} />

          <Route
            path="/articles"
            element={
              <Home>
                <Articles />
              </Home>
            }
          />
          <Route
            path="/articles/:id"
            element={
              <Home>
                <SingleArticle />
              </Home>
            }
          />
          <Route path="/add-article" element={<AddArticle />} />

          <Route
            path="/projects"
            element={
              <Home>
                <Projects />
              </Home>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <Home>
                <SingleProject />
              </Home>
            }
          />
          <Route path="/add-project" element={<AddProject />} />

          <Route
            path="/publications"
            element={
              <Home>
                <Publications />
              </Home>
            }
          />

          <Route
            path="/tags"
            element={
              <Home>
                <Tags />
              </Home>
            }
          />

          <Route
            path="/community"
            element={
              <Home>
                <CommunityWall />
              </Home>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
