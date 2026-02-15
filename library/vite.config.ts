import { defineConfig as define_config } from 'vite'

export default define_config({
  build: {
    lib: {
      entry: "/lib/main.ts",
    },
    rollupOptions: {
      external: ['lit'],
    },
  },
})