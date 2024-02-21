import { menus } from '@/json'
import Item from '@/components/item'
import commonly from '@/json/modules/commonly'

export const metadata = {
	title: 'BM快捷导航',
	keywords: 'BM快捷导航,前端快捷导航,导航,前端导航,技术导航,H5技术博客,web前端,H5,web技术,web',
	description: 'web前端开发常用技术导航'
}

export default function Home() {
	const renderData = commonly.concat(menus)
	return (
		<main
			className='grid-rows-auto beautyScroll grid flex-1 gap-20 overflow-y-auto p-20 pb-20'
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gridAutoRows: '160px'
			}}
		>
			<Item data={renderData} />
		</main>
	)
}
