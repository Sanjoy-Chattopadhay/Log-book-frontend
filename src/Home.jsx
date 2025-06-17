import React from "react";
import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import "./Home.css";

const Home = ({ children }) => {
  return (
    <div className="three-column-layout">
      <div className="left-sidebar">
        <ProfileCard />
      </div>

      <div className="main-content">{children}</div>

      <div className="right-sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
