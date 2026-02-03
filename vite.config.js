import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        robot: resolve(__dirname, 'robot.html'),
        outreach: resolve(__dirname, 'outreach.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
