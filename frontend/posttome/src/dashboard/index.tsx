import React, { useState } from "react";
import { getCookies } from "typescript-cookie";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic here
  };
  console.log(getCookies());

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>Search</button>
      </div>
      {/* Render your posts here */}
    </div>
  );
};

export default Dashboard;
