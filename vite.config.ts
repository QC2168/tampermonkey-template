import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import injectMeta from './plugins/injectMeta'


export default defineConfig(({ mode }) => {
  const isWatch = mode === 'watch'

  // 监听模式
  const watch = isWatch ? {
    include: ['src/**'],
    exclude: 'node_modules/**'
  } : null;

  return {
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'index',
        fileName: 'index',
      },
      watch
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
  }
})
