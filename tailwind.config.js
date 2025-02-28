/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Custom primary color
        secondary: "#F59E0B", // Custom secondary color
        accent: "#10B981", // Accent color for highlights
        background: "#F3F4F6", // Custom background color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font
      },
      spacing: {
        '128': '32rem',
        '144': '36rem', // Custom spacing values
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};
