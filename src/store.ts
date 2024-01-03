import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const cacheTheme = localStorage.getItem('bm_theme')
export const darkStore = atomWithStorage('bm_dark', localStorage.getItem('bm_dark') ?? 0)
export const themeStore = atomWithStorage('bm_theme', cacheTheme ? JSON.parse(cacheTheme) : 'drillDown')
export const themeOptions = atom<{ label: string; value: string }[]>([
	{ label: '下钻交互', value: 'drillDown' },
	{ label: '平铺交互', value: 'tile' }
])
