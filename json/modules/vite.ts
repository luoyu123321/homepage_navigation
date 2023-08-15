export default {
	label: 'vite',
	title: "BM-vite",
	description: "前端开发vite技术导航",
	keywords: "BM快捷导航,前端导航,vite技术导航,vite技术书签,vite",
	icon:'/6.png',
	path:'/vite',
	index:7,
	nav: [
		{
			text: 'Vite',
			link: 'https://cn.vitejs.dev/',
			icon: 'https://cn.vitejs.dev/logo.svg',
			desc: '下一代前端开发与构建工具'
		},
		{
			text: 'htmlEnv',
			link: 'https://www.npmjs.com/package/vite-plugin-html-env',
			desc: '给入口文件添加变量'
		}
	]
} as ModuleItem
