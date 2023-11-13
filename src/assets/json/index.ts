const modules = import.meta.glob('./modules/*.ts', { eager: true })
//推荐栏的（优先显示）
const commonly: BM.Item[] = [
	{
		type: 1,
		label: 'svelte',
		link: 'https://svelte.dev/',
		icon: 'https://svelte.dev/favicon.png',
		desc: 'svelte框架'
	},
	{
		type: 1,
		label: 'solid',
		link: 'https://www.solidjs.com/',
		icon: 'https://www.solidjs.com/img/favicons/favicon-32x32.png',
		desc: 'solidJS框架'
	},
	{
		type: 1,
		label: '掘金',
		link: 'https://juejin.im/timeline',
		icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
		desc: '前端技术论坛'
	},
	{
		type: 1,
		label: '码云',
		link: 'https://gitee.com/',
		icon: 'https://gitee.com/static/images/logo_themecolor.png',
		desc: '国内代码仓库'
	},
	{
		type: 1,
		label: '知乎',
		link: 'https://www.zhihu.com/signin?next=%2F',
		icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-152.a53ae37b.png',
		desc: '有问题，上知乎'
	},
	{
		type: 1,
		label: '蓝湖',
		link: 'https://lanhuapp.com',
		icon: 'https://lhcdn.lanhuapp.com/web/imgs/lanhuLogo1db1cd87.svg',
		desc: '设计协同平台'
	},
	{
		type: 1,
		label: '腾讯翻译君',
		link: 'https://fanyi.qq.com/',
		icon: 'https://stdl.qq.com/stdl/activity/translate_pcweb/imgs/header_logo_31O-BS.png'
	},
	{
		type: 1,
		label: '阿里图标库',
		link: 'http://www.iconfont.cn/',
		icon: '//img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg'
	},
	{
		type: 1,
		label: '字节图标库',
		link: 'https://iconpark.oceanengine.com/home',
		icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/static/media/logo_with_name.598fc011.svg'
	},
	{
		type: 1,
		label: 'turbo',
		link: 'https://turbo.build/',
		icon: 'https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg',
		desc: '高性能构建系统'
	}
]
const menus = Object.values(modules)
	.map((item: any) => item.default)
	.sort((prev, next) => prev.sort - next.sort)
export default [...commonly, ...menus] as BM.Item[]
