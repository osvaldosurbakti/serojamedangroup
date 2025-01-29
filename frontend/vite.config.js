import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Pastikan root tetap di folder frontend
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
