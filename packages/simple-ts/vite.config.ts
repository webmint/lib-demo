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
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'simple-ts',
            // the proper extensions will be added
            fileName: 'simple-ts',
        },
        emptyOutDir: true,
    },
})
