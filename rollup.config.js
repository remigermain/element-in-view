import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const options = {
  input: "src/index.js",
  output: {
    dir: "dist",
    name: "elementInView",
    format: "umd",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: ["node_modules/**"],
    }),
  ],
}

/* add terset if on production */
if (process.env.NODE_ENV === "production") {
  options.plugins.push(terser())
}

export default options
