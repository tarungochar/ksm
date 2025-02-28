import React, { useEffect, useState } from "react";
import { getExploreData } from "../services/api";

const Explore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getExploreData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching explore data:", error);
      });
  }, []);

  return <div>Explore Page</div>;
};

export default Explore;
