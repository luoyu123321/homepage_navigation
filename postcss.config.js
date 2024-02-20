const PresetFontSizeConfig = {}
const PresetRadiusConfig = {}
const PresetSpacingConfig = {}

for (let i = 0; i < 100; i++) {
  PresetFontSizeConfig[i] = i + 'px'
  PresetRadiusConfig[i] = i + 'px'
  PresetSpacingConfig[i] = i + 'px'
}

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj))
}

module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./{app,components}/**/*.js'],
      darkMode: 'class',
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
    },
    autoprefixer: {},
  },
};
