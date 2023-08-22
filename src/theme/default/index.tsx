import Items from '@/components/Items'
import Logo from '@/components/Logo'
import SearchInput from '@/components/SearchInput'
import Settings from '@/components/Settings'
import { useState } from 'react'
import Menus from './modules/Menus'
function DefaultTheme() {
	const [itemData, setItemData] = useState<Array<BM.MenuItem>>([])

	return (
		<div className='BM-grid BM-h-screen BM-select-none BM-grid-cols-[300px_1fr] BM-overflow-y-auto BM-bg-1f dark:BM-bg-dark1f'>
			<aside className='BM-relative BM-flex BM-h-screen BM-flex-col BM-items-center BM-rounded-[0_20px_0_0] BM-bg-white BM-pb-10 BM-text-666 dark:BM-bg-darkWhite'>
				<Logo />
				<Menus setItemData={setItemData} />
			</aside>
			<div className='BM-flex BM-flex-col BM-gap-30 BM-px-30 BM-pt-30'>
				<header className='BM-flex BM-items-center BM-justify-center BM-space-x-20'>
					<div className='BM-relative BM-flex BM-h-60 BM-flex-1 BM-items-center BM-justify-center BM-rounded-full BM-bg-white BM-p-[0.5em] dark:BM-bg-darkWhite'>
						<SearchInput />
					</div>
					<Settings />
				</header>
				<div className='beautyScroll BM-overflow-y-auto BM-overflow-x-hidden BM-rounded-[20px_20px_0_0] BM-bg-white BM-p-20 dark:BM-bg-darkWhite' style={{ height: 'calc(100vh - 120px)' }}>
					<Items links={itemData} />
				</div>
			</div>
		</div>
	)
}

export default DefaultTheme
