const modulesFiles = import.meta.globEager('./*.png')
let modules = []
for (const path in modulesFiles) {
	modules.push(modulesFiles[path].default)
}
export default modules
