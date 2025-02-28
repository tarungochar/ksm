import React, { useState, useEffect } from "react";
import axios from "axios";

const Explore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.example.com/explore") // 🔹 Replace with your actual API
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Explore Startups</h1>

      {/* 🔹 Show Loading State */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* 🔹 Show Error Message if API fails */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* 🔹 Show Data in a Grid Format */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-lg rounded-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <a href={item.website} className="text-blue-500 hover:underline mt-2 block">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;