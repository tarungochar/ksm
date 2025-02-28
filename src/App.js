import React from "react";
import AppRoutes from "./routes"; // Ensure this matches the actual file name
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Botton
import Button from "./components/Button";
import { ArrowRight } from "lucide-react";

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
  return (
    <div>
      {/* ✅ Navbar सबसे ऊपर */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to KSM Project</h1>
        <p>This is a platform for startups and businesses.</p>
      </main>
    </div>
  );
  return (
    <div className="flex flex-col space-y-4 p-6">
      <Button text="Click Me" onClick={() => alert("Button Clicked!")} />
      <Button text="Submit" variant="success" />
      <Button text="Delete" variant="danger" />
      <Button text="Proceed" variant="warning" />
      <Button text="Next" variant="primary" icon={ArrowRight} />
      <Button text="Small Button" size="sm" />
      <Button text="Large Button" size="lg" />
    </div>
  );
}

export default App;
