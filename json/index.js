import auxiliary from './modules/auxiliary'
import css from './modules/css'
import map from './modules/map'
import other from './modules/other'
import react from './modules/react'
import tool from './modules/tool'
import vite from './modules/vite'
import vue from './modules/vue'
import web from './modules/web'
import wechat from './modules/wechat'

const data = {
	auxiliary,
	css,
	map,
	other,
	react,
	tool,
	vue,
	vite,
	web,
	wechat
}
export const menus = Object.keys(data).map(key => {
	return {
		label: data[key].label,
		path: `/${key}`,
		key,
		type: 2
	}
})
export default data
