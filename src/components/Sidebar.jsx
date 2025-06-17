import React from "react";
import RecentsCard from "./RecentsCard";
import ArchivesCard from "./ArchivesCard";
import TagsCard from "./TagsCard";
// import { API_BASE } from "../../server/utils/api.js"; // adjust path as needed
const API_BASE = import.meta.env.VITE_API_BASE;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <RecentsCard />
      <ArchivesCard />
      <TagsCard />
    </div>
  );
};

export default Sidebar;
