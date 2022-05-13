import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import {resolve} from 'path'
import AutoImport from 'unplugin-auto-import/vite'

const pathResolve = (dir) => resolve(__dirname, '.', dir)

export default defineConfig({
    base:'/',
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue']
        }),
    ],
    server: {
        host: '0.0.0.0',
        open: true,
        port: 8080
    },
    resolve: {
        alias: {
            '@': pathResolve('./src/')
        }
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer({
                    overrideBrowserslist: ['last 2 versions']
                }),
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            atRule.name === 'charset' && atRule.remove()
                        }
                    }
                }
            ]
        }
    }
})
