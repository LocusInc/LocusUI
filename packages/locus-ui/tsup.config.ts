import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/index.css"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  target: "esnext",
  sourcemap: true,
  shims: true,
  clean: true,
  splitting: false,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.alias = {
      "@": "./src",
    };
  },
});
