import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: 'localhost', // This restricts the server to be accessible only from the local machine

  },
  plugins: [react()],
});
