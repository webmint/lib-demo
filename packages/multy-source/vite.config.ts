// vite.config.js
import { resolve, } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts()],
    resolve: {
        alias: [
            { find: '@', replacement: resolve('src') },
        ],
    },
    esbuild: {
        treeShaking: true,
    },
    build: {
        lib: {
            entry: {
                math: resolve(__dirname, 'src/math/index.ts'),
                text: resolve(__dirname, 'src/text/index.ts'),
            },
            formats: ['cjs', 'es'],
        },
        minify: true,
        sourcemap: true,
        emptyOutDir: true,
    },
})
