import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import StartupProfile from "./pages/StartupProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/startup/:id" element={<StartupProfile />} />
      </Routes>
    </Router>
  );
}

export default Routes;
