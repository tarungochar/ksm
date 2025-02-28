import { useState } from "react";
import { Menu, X } from "lucide-react";  // ✅ Icon के लिए
import { Link } from "react-router-dom"; // ✅ React Router के लिए

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">KSM Project</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-3 mt-4 text-center">
          <li><Link to="/" className="hover:text-secondary">Home</Link></li>
          <li><Link to="/explore" className="hover:text-secondary">Explore</Link></li>
          <li><Link to="/startups" className="hover:text-secondary">Startups</Link></li>
          <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
