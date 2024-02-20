/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
	transpilePackages: ['@douyinfe/semi-ui'],
	//打包的时候，变成静态文件打包
	output: 'export',
	assetPrefix: isProd ? '/homepage_navigation' : undefined,
	basePath: isProd ? '/homepage_navigation' : undefined,
	images: { unoptimized: true }
}

export default nextConfig
