import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'antd',
          libDirectory: 'es',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../public/wc-react-app/'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'wc-react-app',
      fileName: () => `index.js`,
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
