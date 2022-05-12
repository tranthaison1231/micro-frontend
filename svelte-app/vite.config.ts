import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/svelte-app/',
  build: {
    outDir: path.resolve(__dirname, '../public/svelte-app/'),
  },
});
