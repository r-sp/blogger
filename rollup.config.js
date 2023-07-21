import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/lib/main.ts",
  watch: true,
  output: { file: "src/bundle.min.js", format: "umd" },
  plugins: [
    typescript(),
    terser({
      mangle: {
        toplevel: true,
      },
      compress: {
        ecma: 2019,
      },
    }),
  ],
};
