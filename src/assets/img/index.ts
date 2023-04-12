const modulesFiles: any = import.meta.glob('./*.png', { eager: true })
let modules: any = []
for (const path in modulesFiles) {
	modules.push(modulesFiles[path].default)
}
export default modules
