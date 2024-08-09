import React, { useState } from "react";
import { getCookies } from "typescript-cookie";
import { api } from "../lib/axios";

// interface Post {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
// }

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token") || getCookies().token;
  // const [posts, setPosts] = useState<Post[]>([]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic
  };

  // Fetch posts
  api
    .get("/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

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
