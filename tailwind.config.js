/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#6D28D9",
        dark: "#050505",
        glass: "rgba(255,255,255,0.05)",
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glow: "0 0 50px rgba(139,92,246,.45)",
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        pulseSlow: "pulse 6s infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-18px)",
          },
        },
      },
    },
  },

  plugins: [],
};
