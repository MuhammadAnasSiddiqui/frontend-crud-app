/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chat: {
          background: "#0f172a", // dark slate
          sender: "#3b82f6", // blue
          receiver: "#1e293b", // dark gray
          text: "#ffffff",
        },
        primary: {
          DEFAULT: "#0d0d0d", // main dark background
          light: "#1a1a1a", // cards & surfaces
          dark: "#000000", // pure black
        },
        accent: {
          DEFAULT: "#e50914", // main red
          light: "#ff3344", // hover red
        },
        neutral: {
          white: "#ffffff",
          lightGray: "#f5f5f5",
          midGray: "#9ca3af",
          darkGray: "#4b5563",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.5)",
        glow: "0 0 15px rgba(229, 9, 20, 0.5)",
      },
    },
  },
  plugins: [],
};
