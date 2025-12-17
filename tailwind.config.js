// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.css$/,
//       use: ["style-loader", "css-loader", "postcss-loader"],
//       include: /node_modules/,
//     });
//     return config;
//   },
//   content: ["./src/**/*.{html,js,jsx}"],
//   theme: {
//     extend: {
//       animation: {
//         blink: "blink 1s steps(2, start) infinite",
//         marquee: "marquee 30s linear infinite",
//         "spin-slow": "spin 20s linear infinite",
//         pulseSlow: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         fadeOut: "fadeOut 1s ease-in-out forwards",
//         slideUp: "slideUp 0.5s ease-out",
//       },
//       colors: {
//   one: "#7ab326", // Main green (vibrant and organic)

//   primary: "#ffffff", // Clean white background – neutral, remains the same
//   secondary: "#f1f9ec", // Very light green-tinted background – soft on the eyes, matches 'one'
//   accent: "#5d8e1e", // A darker green for emphasis or hover states (good contrast)
//   coal: "#2e3d1f", // Deep earthy charcoal with a green tint – readable and warm

//   // Icon and supporting colors
//   sky: "#9fd15f", // Fresh lime green – cheerful, vibrant tone for highlights
//   orange: "#db8624", // Olive green tone for deep contrast with vibrancy
//   lightGreen: "#cdebb6", // Pale leafy green – for soft highlights or subtle backgrounds

//   track: {
//     odd: "#eef8e5", // Gentle greenish off-white for zebra striping (odd rows)
//     even: "#dcf2ca", // Light green tone (even rows) for clear alternation
//     green: "#e5f4e1", // Minty pale green – background for highlights/panels
//   },
// },
//       textShadow: {
//         "blue-950": "0px 0px 50px rgb(244, 255, 238)", // Example shadow
//       },
//       keyframes: {
//         bubbleFadeSlide: {
//           "0%": { opacity: 1, transform: "translateX(0)" },
//           "100%": { opacity: 0, transform: "translateX(20px)" },
//         },
//         pulseSlow: {
//           "0%, 100%": { transform: "scale(1)" },
//           "50%": { transform: "scale(1.1)" },
//         },
//         marquee: {
//           "0%": { transform: "translateX(100%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//         blink: {
//           "0%, 100%": { opacity: 1 },
//           "0%": { opacity: 0 },
//         },
//         fadeOut: {
//           "0%": { opacity: 1 },
//           "100%": { opacity: 0, transform: "translateY(-10px)" },
//         },
//         slideUp: {
//           "0%": { transform: "translateY(20px)", opacity: 0 },
//           "100%": { transform: "translateY(0)", opacity: 1 },
//         },
//       },
//     },
//   },
//   plugins: [require("tailwindcss-textshadow",'@tailwindcss/line-clamp')],
// };

// -------------------The code 1 is here-------------
/** /** @type {import('tailwindcss').Config} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
      include: /node_modules/,
    });
    return config;
  },
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        pulseSlow: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-out",
      },
      colors: {
        one: "#6D28D9",       // changed from #6D6D6D → PURPLE
        primary: "#0F0B1F",   // Dark background
        secondary: "#1B1533", // Slightly lighter dark for cards/sections
        accent: "#6D28D9",    // changed to PURPLE
        coal:  "#090714",      // Deep dark accent if needed

        // Icon and supporting colors
        sky:"#A78BFA",
        orange: "#C4B5FD",
        lightGreen: "#DDD6FE",

        track: {
          odd: "#1E1B3A",
          even: "#14122B",
          green: "#6D28D9", // changed from #6D6D6D → PURPLE
        },
      },
      textShadow: {
        "blue-950": "0px 0px 50px rgb(244, 255, 238)", // unchanged
      },
      keyframes: {
        bubbleFadeSlide: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(20px)" },
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/line-clamp"),
  ],
};
