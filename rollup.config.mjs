import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.mjs", // Entry file of your package
  output: {
    file: "index.js", // Output bundle file
    // format: "cjs", // CommonJS module format
    sourcemap: true, // Generate source maps
  },
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    babel({
      exclude: "node_modules/**", // Exclude node_modules from Babel transpilation
    }),
    terser(), // Minify the output bundle (optional)
  ],
  external: ["react", "react-dom"],
};
