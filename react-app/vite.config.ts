import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-app/',
  build: {
    outDir: path.resolve(__dirname, '../public/react-app/'),
  },
});
