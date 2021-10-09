// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
const pathResolve = (pathStr: string) => resolve(__dirname, pathStr);

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "src/style/defaultTest.less";`,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: pathResolve("./src"),
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".vue", ".jsx", ".tsx", ".json"],
  },
  plugins: [vue(), vueJsx()],
});
