import icon3ds from '@/assets/img'
import nav from '@/assets/json'
import random from 'lodash.random'

export function GetNavData() {
	const slide_item: Array<BM.NavItem> = []
	const clone_icons = JSON.parse(JSON.stringify(icon3ds))
	nav.forEach(item => {
		const rd = clone_icons.splice(random(0, clone_icons.length - 1), 1)
		slide_item.push({
			label: item.title,
			icon: rd[0]
		})
	})
	return slide_item
}
