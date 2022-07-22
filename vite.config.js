import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import path from "path";

const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(root, "src/lib.js"),
      name: "vue-icomoon",
      formats:['es', 'umd']
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
});
