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
  splitting: true,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.alias = {
      "@": "./src",
    };
  },
});
