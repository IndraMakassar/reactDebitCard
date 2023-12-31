
const plugin = require("tailwindcss/plugin")

const myclass = plugin(function({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d"
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden"
    },
  });
});

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [myclass],
}

