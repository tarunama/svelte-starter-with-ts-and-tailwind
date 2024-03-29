import * as path from "path";

import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  resolve: {
    alias: {
      $img: path.resolve("src/images"),
    },
  },

  kit: {
    adapter: adapter(),
  },

  vite: {
    mode: process.env.NODE_ENV,
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        $components: path.resolve("./src/components"),
      },
    },
  },
};

export default config;
