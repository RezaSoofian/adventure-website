/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors: {
        cRed: "#c81d11",
      },
      fontFamily: {
        Roboto: "roboto",
        RobotoBold: "roboto-bold",
        PermanentMarker: "Permanent-marker",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
