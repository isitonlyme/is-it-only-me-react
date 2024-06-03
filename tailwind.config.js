import defaultTheme from "tailwindcss/defaultTheme";

export default {
  mode: "jit",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PPPangaia"', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "main-color": "#D0EE1A", //main color & CTA color
        "white-text-color": "#fffff",
        "purple-text-color": "#7D53FF",
      },

      backgroundColor: {
        "custom-bg": "#0D2D75", // Custom back ground color
      },
      backgroundImage: {
        "gradient-to-bl":
          "linear-gradient(to bottom left, #4F46E5, #667EEA, #4F46E5)",
      },
      top: {
        10: "10%",
        30: "30%",
        50: "50%",
        70: "80%",
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
