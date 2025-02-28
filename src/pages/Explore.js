import React, { useState, useEffect } from 'react';
import axios from "axios";

const Explore = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get("https://api.example.com/explore")  // Replace with your API
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
  
    return (
      <div>
        <h1>Explore Page</h1>
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    );
  };
  
  export default Explore;