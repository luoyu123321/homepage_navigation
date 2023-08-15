const files = require.context('./modules', true, /\.ts$/)

const modules = files.keys().reduce((modules:any, path) => {
    const name = path.replace(/^\.\/|.ts$/g, '')
    modules[name] = files(path).default
    return modules
}, {})

export {modules}