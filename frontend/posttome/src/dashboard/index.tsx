import React, { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { getCookie } from "typescript-cookie";
const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Perform search logic
  };
  React.useEffect(() => {
    // Fetch posts
    api
      .get("/posts", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
