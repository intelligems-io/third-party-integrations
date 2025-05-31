import {defineConfig} from "tsup";

export default defineConfig({
  entry: ['./src/**/!(*.d|*.spec).ts'],
  sourcemap: process.env.NODE_ENV === "development" ? "inline" : false,
  target: "esnext",
  outDir: "dist",
  minify: process.env.NODE_ENV === "production",
  treeshake: true,
  splitting: false,
  clean: true,
  tsconfig: "tsconfig.json",
  dts: {
    compilerOptions: {
      composite: false,
    },
  },
  format: ["cjs"],
});
