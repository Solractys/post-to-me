import React, { useEffect, useState } from "react";
import { getCookies } from "typescript-cookie";
import { api } from "../lib/axios";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token") || getCookies().token;
  const [posts, setPosts] = useState<Post[]>([]);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic
  };

  useEffect(() => {
    // Fetch posts
    api
      .get("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": "true",
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

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
