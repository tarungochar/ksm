import React from "react";
import { Link } from "react-router-dom";  // 🔹 React Router के लिए
import { cn } from "../utils/helpers";

const Home = () => {
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-background py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary">
            Empowering Startups, One Platform at a Time 🚀
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Join the KSM and get access to a thriving ecosystem of startups, investors, and customers.
          </p>
          <button className="mt-6 bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </section>

      {/* 🔹 Navigation Links */}
      <nav className="mt-8 flex justify-center space-x-10">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
