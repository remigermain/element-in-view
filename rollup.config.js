import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
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
    terser(),
  ],
};
