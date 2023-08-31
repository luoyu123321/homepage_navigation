import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

const pathResolve = dir => resolve(__dirname, '.', dir)
export default defineConfig({
	base: './',
	plugins: [react()],
	resolve: {
		alias: {
			'@': pathResolve('./src/'),
			'~img': pathResolve('./src/assets/img')
		}
	},
	css: {
		postcss: {
			plugins: [
				tailwindcss as any,
				autoprefixer({
					overrideBrowserslist: ['last 2 versions']
				})
			]
		}
	}
})
