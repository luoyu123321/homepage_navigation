import { atomWithStorage } from 'jotai/utils'

export const darkStore = atomWithStorage('bm_dark', localStorage.getItem('bm_dark') ?? 0)
export const themeStore = atomWithStorage('bm_theme', 'default')
