import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import injectMeta from './plugins/injectMeta'


export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'index',
      fileName: 'index',
    },
  },
  plugins: [
    babel({
      babelConfig: {
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: 'entry',
            corejs: 3,
          }]
        ],
      }
    }),
    injectMeta()
  ]
})
