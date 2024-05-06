import FullData from '@/assets/json'
import Items from '@/components/Items'
import { useEffect, useState } from 'react'
import 'swiper/css'

function Tile() {
	const [currentData, setCurrentData] = useState<BM.Item[]>([])
	useEffect(() => setCurrentData(FullData), [])
	return (
		<main
			className='grid-rows-auto beautyScroll grid flex-1 gap-20 overflow-y-auto p-20 pb-20'
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
				gridAutoRows: '160px'
			}}
		>
			<Items data={currentData} callback={null} />
		</main>
	)
}
export default Tile
