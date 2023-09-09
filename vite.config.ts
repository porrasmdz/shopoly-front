/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
		lib: {
			name    : 'VueSplide',
			entry   : './src/main.ts',
      formats : [ 'es', 'cjs' ],
			fileName: format => {
        let suffix: string = format;

        if ( format === 'es' ) {
          suffix = 'esm';
        }

        return `js/vue-splide.${ suffix }.js`;
      },
		},
    emptyOutDir: false,
    watch: {
			include: 'src/**'
		},
    rollupOptions: {
      external: [ 'vue' ],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  },
  plugins: [vue()],

  test:{

  }
})
