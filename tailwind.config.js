// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      screens: {
        md675: {
          raw: "screen and (max-width: 675px)",
        },
        md576: {
          raw: "screen and (max-width: 576px)",
        },
        md550: {
          raw: "screen and (max-width: 550px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
        mq400: {
          raw: "screen and (max-width: 400px)",
        },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}