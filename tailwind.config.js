/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9013FE",
        "primary-light": "#A29BFE",
        secondary: "#FF8687",
        dark: "#2D3436",
        light: "#F5F6FA",
        success: "#00B894",
        warning: "#FDCB6E",
        danger: "#D63031",
      },
      borderRadius: {
        custom: "12px",
      },
      boxShadow: {
        custom: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
