const PresetFontSizeConfig = {}
const PresetRadiusConfig = {}
const PresetSpacingConfig = {
	"2em":"2em",
	"3em":"3em",
	"4em":"4em",
	"5em":"5em",
}

for (let i = 0; i < 100; i++) {
	if (i < 61) {
		PresetFontSizeConfig[i] = i + 'px'
	}
	if (i < 30) {
		PresetRadiusConfig[i] = i + 'px'
	}
	PresetSpacingConfig[i] = i + 'px'
}

function cloneDeep(obj) {
	return JSON.parse(JSON.stringify(obj))
}

module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	corePlugins: {
		preflight: false
	},
	theme: {
		//基于默认配置的继承样式
		extend: {
			colors: {
				"main":'#5354EE',
				"bgLight":'#F8FAFC',
				"bgDark":"#16161a",
				"bgDark-2":"#232429",
				"borderDark":"#35353a"
			},
			fontSize: () => cloneDeep(PresetFontSizeConfig),
			borderRadius: () => cloneDeep(PresetRadiusConfig),
			lineHeight:()=>cloneDeep(PresetSpacingConfig)
		},
		//直接覆盖，非继承
		spacing: () => cloneDeep(PresetSpacingConfig)
	}
}
