import React from "react";
import { Link } from "react-router-dom";  // 🔹 Link import करना ज़रूरी है


const Home = () => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to KSM</h2>

      {/* 🔹 Navigation Links */}
      <nav className="flex justify-center space-x-10">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
