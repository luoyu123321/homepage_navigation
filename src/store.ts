import { atomWithStorage } from 'jotai/utils'

export const appStoreAtom = atomWithStorage<BM.SettingsItem>('bm_app', {
	//是否暗黑模式
	isDark: true,
	//当前主题：default->默认主题  clean->简洁主题
	themeType: 'clean'
})
