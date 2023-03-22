import { resolve } from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'w4b-vite-react',
      fileName: 'w4b-vite-react',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDom',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  plugins: [reactRefresh()],
});
