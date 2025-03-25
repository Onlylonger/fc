export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: "./src/**/*.{ts,tsx,js,jsx}",
      optimize: true,
    },
    autoprefixer: {},
  },
};
