const modules = import.meta.glob('./modules/*.ts', { eager: true })
const menus = Object.values(modules)
	.map((item: any) => item.default)
	.sort((prev, next) => prev.sort - next.sort)
export default menus as JsonList[]
