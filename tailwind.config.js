/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 5s linear infinite",
        "fade-down-rotate": "fade-down-rotate 0.5s ease forwards",
        "zoom-in": "zoom-in 0.5s ease forwards",
        "small-bounce": "small-bounce 0.7s ease forwards 5",
      },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "fade-down-rotate": {
          "0%": { transform: "rotateX(0) translateY(0)", opacity: 1 },
          "100%": { transform: "rotateX(70deg) translateY(5rem)", opacity: 0 },
        },
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },

          "80%": {
            opacity: 0.8,
            transform: "scale3d(1, 1, 1)",
          },
        },
        "small-bounce": {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
    screens: {
      sm: { min: "1px", max: "970px" },
    },
  },
  plugins: [],
};
