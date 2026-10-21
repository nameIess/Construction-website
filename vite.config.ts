import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages project subpath — site is hosted at /Construction-website/
  base: '/Construction-website/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    // Ensure the app mounts reliably on slow connections / older browsers
    target: 'es2020',
  },
});
