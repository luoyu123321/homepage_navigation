import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'

const pathResolve = dir => resolve(__dirname, '.', dir)
export default defineConfig({
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
				tailwindcss,
				autoprefixer({
					overrideBrowserslist: ['last 2 versions']
				})
			]
		}
	}
})
