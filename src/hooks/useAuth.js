import { useState, useEffect, createContext, useContext } from "react";

// Create Authentication Context
const AuthContext = createContext();

// AuthProvider Component (Wrap this around your App)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User State
  const [loading, setLoading] = useState(true); // Loading State

  // Simulate fetching user data (from API or Local Storage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login Function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Authentication Context
export const useAuth = () => {
  return useContext(AuthContext);
};
