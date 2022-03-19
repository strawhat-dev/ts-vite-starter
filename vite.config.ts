import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: { minify: 'esbuild', target: 'esnext' },
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
});
