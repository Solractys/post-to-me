<<<<<<< Updated upstream
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
=======
import React, { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { getCookie } from "typescript-cookie";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
>>>>>>> Stashed changes
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic
  };
<<<<<<< Updated upstream

  React.useEffect(() => {
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
  }, [token]);
=======
  useEffect(() => {
    // Fetch posts here
    const fetchData = async () => {
      try {
        const response = await api.get("/posts", {
          headers: {
            Cookie: getCookie("token"),
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        });
        const data = await response.data;

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
>>>>>>> Stashed changes

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
