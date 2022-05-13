import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, '../public/wc-svelte-app/'),
    lib: {
      entry: './src/lib/index.ts',
      name: 'wc-svelte-app',
      formats: ['es'],
      fileName: () => `index.js`,
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
