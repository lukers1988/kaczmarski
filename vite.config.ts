import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@customComponents': path.resolve(__dirname, './src/components'),
      '@customStyles': path.resolve(__dirname, './src/styles'),
      '@customConfig': path.resolve(__dirname, './src/config'),
      '@customContexts': path.resolve(__dirname, './src/contexts'),
      '@customProviders': path.resolve(__dirname, './src/providers'),
      '@customInterfaces': path.resolve(__dirname, './src/interfaces'),
      '@customHooks': path.resolve(__dirname, './src/hooks'),
      '@customTypes': path.resolve(__dirname, './src/types'),
    },
  },
});
