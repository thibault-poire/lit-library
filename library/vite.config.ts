import { globSync as glob_sync } from 'node:fs';
import { defineConfig as define_config } from 'vite';
import dts from 'vite-plugin-dts';

const entries = glob_sync(`${__dirname}/src/**/*.{ts,css}`).filter((file_name) => !file_name.match(/\.(stories|style)/g));

export default define_config({
  build: {
    cssCodeSplit: true,

    lib: {
      entry: entries,
      name: "lib",
      formats: ["es"]
    },

    rollupOptions: {
      external: ['lit', 'lit/decorators.js'],
    },

  },

  plugins: [dts()]
});