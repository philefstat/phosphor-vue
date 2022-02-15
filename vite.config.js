import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

const globals = {
  vue: "Vue",
};

export default defineConfig({
  plugins: [
    createVuePlugin(),
    ...(process.env.ANALYZE === "true"
      ? [
          visualizer({
            open: true,
            title: "phosphor-vue bundle visualizer",
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/phosphor-vue.ts"),
      name: "PhosphorVue",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: [
        {
          preserveModules: true,
          format: "esm",
          entryFileNames: `[name].esm.js`,
          globals,
        },
        {
          compact: true,
          format: "umd",
          globals,
        },
        {
          compact: true,
          format: "iife",
          globals,
        },
        {
          compact: true,
          format: "cjs",
          globals,
        },
      ],
    },
  },
});
