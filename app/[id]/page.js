import orgData, { menus } from '@/json'
import Item from '@/components/item'

export async function generateStaticParams() {
	return menus.map(item => ({ id: `${item.key}` }))
}

export async function generateMetadata({ params }) {
	const id = params.id
	const { title, description, keywords } = orgData[id]
	return {
		title,
		description,
		keywords: keywords.split(',')
	}
}

export default function ({ params }) {
	const renderData = orgData[params.id]
	return (
		<main
			className='grid-rows-auto beautyScroll grid flex-1 gap-20 overflow-y-auto p-20 pb-20'
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gridAutoRows: '160px'
			}}
		>
			<Item data={renderData.nav} />
		</main>
	)
}
