import Logo from '@/components/Logo'
import Menus from './modules/Menus'
import { useState } from 'react'
import Items from '@/components/Items'
import SearchInput from '@/components/SearchInput'
import Settings from '@/components/Settings'
function DefaultTheme() {
	const [itemData, setItemData] = useState<Array<BM.MenuItem>>([])

	return (
		<div className='BM-grid BM-grid-cols-[300px_1fr] BM-h-screen BM-bg-1f BM-select-none dark:BM-bg-dark1f BM-overflow-y-auto'>
			<aside className='BM-bg-white BM-text-666 BM-relative dark:BM-bg-darkWhite BM-rounded-[0_20px_0_0] BM-flex BM-flex-col BM-h-screen BM-pb-10 BM-items-center'>
				<Logo />
				<Menus setItemData={setItemData} />
			</aside>
			<div className='BM-px-30 BM-flex BM-flex-col BM-gap-30 BM-pt-30'>
				<header className='BM-flex BM-justify-center BM-items-center BM-space-x-20'>
					<div className='BM-h-60 BM-bg-white BM-relative BM-rounded-full BM-flex BM-items-center BM-justify-center BM-flex-1 BM-p-[0.5em] dark:BM-bg-darkWhite'>
						<SearchInput />
					</div>
					<Settings />
				</header>
				<div className='BM-bg-white BM-rounded-[20px_20px_0_0] BM-p-20 BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkWhite' style={{ height: 'calc(100vh - 120px)' }}>
					<Items links={itemData} />
				</div>
			</div>
		</div>
	)
}

export default DefaultTheme
