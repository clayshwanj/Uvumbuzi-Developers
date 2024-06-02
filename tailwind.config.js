/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { "my-image": "url(assets/img/dev.jpg)" },
    },
  },
  plugins: [],
};
