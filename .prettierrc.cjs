module.exports = {
	//单行长度
	printWidth: 1000,
	//缩进长度
	tabWidth: 2,
	//使用空格代替tab缩进
	useTabs: true,
	//句末使用分号
	semi: false,
	//使用单引号
	singleQuote: true,
	//仅在必需时为对象的key添加引号
	quoteProps: 'as-needed',
	// jsx中使用单引号
	jsxSingleQuote: true,
	//多行时尽可能打印尾随逗号
	trailingComma: 'none',
	//在对象前后添加空格-eg: { foo: bar }
	bracketSpacing: true,
	//单参数箭头函数参数周围使用圆括号-eg: (x) => x
	arrowParens: 'avoid',
	//无需顶部注释即可格式化
	requirePragma: false,
	//在已被preitter格式化的文件顶部加上标注
	insertPragma: false,
	// 使用默认的折行标准 always\never\preserve
	proseWrap: 'preserve',
	//对HTML全局空白不敏感
	htmlWhitespaceSensitivity: 'ignore',
	//不对vue中的script及style标签缩进
	vueIndentScriptAndStyle: false,
	//结束行形式
	endOfLine: 'lf',
	//对引用代码进行格式化
	embeddedLanguageFormatting: 'auto',
	plugins:[
		"prettier-plugin-organize-imports",
		"prettier-plugin-tailwindcss"
	]
}
