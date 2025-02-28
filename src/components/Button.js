import React from "react";
import { cn } from "../utils/helpers"; // Helper function for conditional classes

const variants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  success: "bg-green-500 hover:bg-green-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const Button = ({ text, onClick, variant = "primary", size = "md", icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 font-semibold rounded-lg shadow-md transition-all",
        variants[variant],
        sizes[size]
      )}
    >
      {Icon && <Icon size={18} />}
      {text}
    </button>
  );
};

export default Button;