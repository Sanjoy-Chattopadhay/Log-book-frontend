import React from "react";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const MainContent = () => {
  return (
    <div
      style={{
        // fontFamily: "'Merriweather', serif",
        lineHeight: "1.75",
        fontSize: "16px",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        color: "#222",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
          padding: "0 1rem",
          flexWrap: "wrap",
        }}
      >
        <h1
          style={{
            fontFamily: "'Noto Serif Bengali', serif",
            fontWeight: "600",
            fontSize: "1.3rem",
            margin: "0",
            flex: 1,
          }}
        >
          সঞ্জয় চট্টোপাধ্যায়
        </h1>
        <h1
          style={{
            // fontFamily: "'Merriweather', serif",
            fontWeight: "600",
            fontSize: "1.3rem",
            margin: "0",
            textAlign: "right",
            flex: 1,
          }}
        >
          SANJOY CHATTOPADHYAY
        </h1>
      </div>

      <img
        src="https://i.postimg.cc/0NQKcV7M/coverimage.jpg"
        alt="Sanjoy Banner"
        style={{
          width: "100%",
          borderRadius: "10px",
          margin: "1rem 0",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />

      <p
        style={{
          fontStyle: "italic",
          fontSize: "14px",
          textAlign: "center",
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        Sanjoy at the Darjeeling Mountain in 2025 ⛰️
      </p>

      <h2
        style={{
          fontSize: "1.4rem",
          marginTop: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "0.3rem",
        }}
      >
        Who am I
      </h2>
      <p>
        My name is Sanjoy Chattopadhyay, and I am currently pursuing my M.Tech
        in Computer Science and Engineering at NIT Durgapur. I am passionate
        about software engineering, problem-solving, and creating intuitive user
        experiences through full-stack development.
      </p>
      <p>
        My interests span across machine learning, systems design, blockchain
        applications, and building impactful tools using modern frameworks like
        React, Spring Boot, and Solidity.
      </p>
      <p>
        I am detail-oriented and strive to build solutions that are not only
        functional but also elegant and maintainable. I enjoy learning new
        technologies and continuously improving both my skills and the products
        I develop.
      </p>

      <h2
        style={{
          fontSize: "1.4rem",
          marginTop: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "0.3rem",
        }}
      >
        Career Journey
      </h2>
      <p>
        From the early days of coding in C++ to full-stack development and
        decentralized applications, I have always pursued the intersection of
        technology and practicality. With a strong academic foundation and
        self-driven project experience, I’m preparing myself for a career where
        I can contribute to cutting-edge development and research.
      </p>

      <h2
        style={{
          fontSize: "1.4rem",
          marginTop: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "0.3rem",
        }}
      >
        About This Site
      </h2>
      <p>
        This website is a personal project to showcase my work, share my
        thoughts, and document my journey. The site is built using React and
        mirrors the structure and philosophy of clean, distraction-free
        technical blogging and portfolio sharing.
      </p>
      <ul
        style={{
          paddingLeft: "1.2rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <li style={{ marginBottom: "0.4rem" }}>
          Document and explain computer science and engineering topics
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Present my independent projects and apps
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Share tutorials and development logs
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Track and celebrate personal and academic achievements
        </li>
      </ul>
      <p>
        All opinions and content expressed here are my own and do not reflect
        the views of any organization I may be associated with.
      </p>

      <h2
        style={{
          fontSize: "1.4rem",
          marginTop: "2rem",
          borderBottom: "1px solid #ccc",
          paddingBottom: "0.3rem",
        }}
      >
        Contact Me
      </h2>
      <p>
        Have a question or want to collaborate? Feel free to reach out via email
        or connect with me on GitHub and LinkedIn. For feedback on blog posts or
        projects, please leave comments or open an issue if it's on GitHub — it
        helps everyone!
      </p>
    </div>
  );
};

export default MainContent;
