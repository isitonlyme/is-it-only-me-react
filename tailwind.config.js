import defaultTheme from "tailwindcss/defaultTheme";

export default {
  mode: "jit",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        "custom-bg": "#0D2D75", // Custom blue color
      },
      backgroundImage: {
        "gradient-to-bl":
          "linear-gradient(to bottom left, #4F46E5, #667EEA, #4F46E5)",
      },
      keyframes: {
        scaleUp: {
          from: {
            transform: "scale(0)",
            opacity: 0,
            zindex: -1,
            transformOrigin: "right bottom",
          },
          to: {
            transform: "scale(1)",
            opacity: 1,
            zindex: 2,
            transformOrigin: "right bottom",
          },
        },
        scaleDown: {
          from: {
            transform: "scale(1)",
            opacity: 1,
            zindex: 2,
            transformOrigin: "right bottom",
          },
          to: {
            transform: "scale(0)",
            opacity: 0,
            zindex: -1,
            transformOrigin: "right bottom",
          },
        },
      },
      animation: {
        scaleUp: "scaleUp 0.6s ease-out forwards",
        scaleDown: "scaleDown 0.4s ease-out forwards",
      },
    },
  },

  plugins: [],
};
