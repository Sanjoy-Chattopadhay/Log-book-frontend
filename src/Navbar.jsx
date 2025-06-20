import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import "./Navbar.css";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Sanjoy'S LOG BOOK", path: "/", isBrand: true },
    { name: "Curriculum-Vitae", path: "/curriculum" },
    { name: "Blogs", path: "/blog" },
    { name: "Articles", path: "/articles" },
    { name: "Projects", path: "/projects" },
    { name: "Publications", path: "/publications" },
    { name: "Tags", path: "/tags" },
    { name: "Community", path: "/community" },
  ];

  const renderNavLinks = () =>
    navItems.map((item, index) => (
      <li key={index} className={item.isBrand ? "navbar-brand" : ""}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `${item.isBrand ? "brand-link" : ""} ${isActive ? "active" : ""}`
          }
          end={item.path === "/"}
          onClick={() => setMenuOpen(false)}
        >
          {item.isBrand ? (
            <>
              <img
                src="https://i.postimg.cc/V6HxL6hC/openart-234579aeadcc47aca8e373008198dfdf-raw.jpg"
                alt="logo"
                className="logo"
              />
              <span>{item.name}</span>
            </>
          ) : (
            item.name.toUpperCase()
          )}
        </NavLink>
      </li>
    ));

  return (
    <nav className="navbar">
      {/* Hamburger icon for mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Desktop nav */}
      <ul className="navbar-center">{renderNavLinks()}</ul>

      {/* Theme Toggle (separated) */}
      <div className="navbar-right">
        <div
          className="theme-toggle"
          onClick={toggleDarkMode}
          title="Toggle Theme"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === "Enter" && toggleDarkMode()}
        >
          {darkMode ? (
            <Sun
              size={20}
              style={{ filter: "grayscale(100%)", cursor: "pointer" }}
            />
          ) : (
            <Moon
              size={20}
              style={{ filter: "grayscale(100%)", cursor: "pointer" }}
            />
          )}
        </div>
      </div>

      {/* Mobile nav */}
      <ul className={`navbar-mobile ${menuOpen ? "show" : ""}`}>
        {renderNavLinks()}
      </ul>
    </nav>
  );
};

export default Navbar;
