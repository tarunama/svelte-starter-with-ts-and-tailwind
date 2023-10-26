// vite.config.js
import path from "path";
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  mode: process.env.NODE_ENV,
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      $components: path.resolve("./src/components"),
      $types: path.resolve("./src/types"),
    },
  },
};

export default config;
