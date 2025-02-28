import React from "react";
import AppRoutes from "./routes"; // Ensure this matches the actual file name
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />  {/* ✅ Navbar सभी Pages पर दिखेगा */}

      <Routes>
        <Route path="/" element={<Home />} />        {/* http://localhost:3000/ */}
        <Route path="/about" element={<About />} />  {/* http://localhost:3000/about */}
        <Route path="/contact" element={<Contact />} />  {/* http://localhost:3000/contact */}
      </Routes>

      <Footer />  {/* ✅ Footer सभी Pages पर दिखेगा */}
    </Router>
  );
}

export default App;
