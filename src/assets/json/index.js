const modules = import.meta.glob('./modules/*.js', { eager: true })
const menus = Object.values(modules)
	.map(item => item.default)
	.sort((prev, next) => prev.sort - next.sort)
export default menus
