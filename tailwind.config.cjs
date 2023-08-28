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
	prefix: 'BM-',
	corePlugins: {
		preflight: false
	},
	theme: {
		//基于默认配置的继承样式
		extend: {
			colors: {
				666: '#666',
				333: '#333',
				999: '#999',
				"1f":'#F0F4F7',
				"main":'#5354EE',
				"mHover":'#4345d9',
				"w50":'rgba(255,255,255,0.5)',
				'dark1f':'#0F172A',
				'darkWhite':'#1E293B',
				'darkTextWhite':'#8C9AAF',
				'darkItem':'#2D4258',
				'darkItemHover':'#27394e',
			},
			fontSize: () => cloneDeep(PresetFontSizeConfig),
			borderRadius: () => cloneDeep(PresetRadiusConfig),
			lineHeight:()=>cloneDeep(PresetSpacingConfig)
		},
		//直接覆盖，非继承
		spacing: () => cloneDeep(PresetSpacingConfig)
	}
}
