import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  root: '.',
  build: {
    rollupOptions: {
      input: './index.html',
    },
    outDir: 'build',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'jwt-decode': path.resolve(__dirname, 'node_modules/jwt-decode'),
    },
  },
});
