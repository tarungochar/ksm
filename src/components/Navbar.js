import React, { useState, useEffect } from "react";
import axios from "axios";
import { X, Menu } from "lucide-react"; // Ensure this package is installed

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + "/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);

  return (
    <nav className="bg-primary text-white p-4 shadow-lg flex justify-between items-center">
      <div>
        {user && <p className="text-sm">Welcome, {user.name}!</p>}
        <h1 className="text-2xl font-bold">KSM - Kota Startup Mart</h1>
      </div>

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-lg p-4">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
