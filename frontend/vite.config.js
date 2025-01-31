import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure root is set to the frontend folder
  build: {
    rollupOptions: {
      input: './index.html', // Ensure entry point is specified
    },
    outDir: 'build',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'jwt-decode': path.resolve(__dirname, 'node_modules/jwt-decode'), // Resolve path using 'path' module
    },
  },
});
