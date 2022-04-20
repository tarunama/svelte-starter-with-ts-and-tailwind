// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require("tailwindcss");

const config = {
  plugins: [
    //But others, like autoprefixer, need to run after
    tailwindcss(),
  ],
};

module.exports = config;
