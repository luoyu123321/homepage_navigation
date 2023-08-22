import Header from './modules/Header'
import { FloatButton } from 'antd'
import React, { useEffect, useState } from 'react'
import { GetNavData } from '@/utils'
import nav from '@/assets/json'
import Items from '@/components/Items'

function Airbnb() {
	const [navData, setNavData] = useState<Array<BM.NavItem>>([])
	const [active, setActive] = useState<number>(0)
	const [links, setLinks] = useState<Array<BM.MenuItem>>([])
	useEffect(() => {
		setNavData(GetNavData())
		setLinks(nav[0].nav)
	}, [])
	useEffect(() => {
		setLinks(nav[active].nav)
	}, [active])

	return (
		<div className='BM-pt-80'>
			<Header />
			<CustomNav data={navData} active={active} handle={setActive} />
			<div
				className='BM-bg-white BM-p-30 BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkWhite'
				style={{
					minHeight: 'calc(100vh - 158px)',
					boxSizing: 'border-box'
				}}
			>
				<Items links={links} height='200px' width='210px' />
			</div>
			<FloatButton.BackTop visibilityHeight={100} onClick={() => console.log('click')} />
		</div>
	)
}

function CustomNav({ data, active, handle }: { data: BM.NavItem[]; active: number; handle: React.Dispatch<React.SetStateAction<number>> }) {
	return (
		<nav className='BM-h-78 BM-bg-white BM-sticky BM-top-80 BM-w-full BM-overflow-x-auto BM-flex BM-justify-center BM-z-[100] dark:BM-bg-dark1f'>
			{data.map((item, index) => {
				return (
					<div className='BM-w-[100px] BM-flex BM-flex-col BM-h-full BM-justify-between BM-items-center BM-space-y-4 BM-cursor-pointer BM-pt-10 BM-text-center hover:BM-text-main dark:BM-text-white' key={item.label} onClick={() => handle(index)}>
						<img src={item.icon} alt='' className='BM-w-32' />
						<span className={`BM-text-14 BM-truncate BM-max-w-full BM-px-10 BM-pb-10 BM-border-main BM-border-solid BM-border-0 ${active === index ? 'BM-text-main' : null}`} style={{ borderBottomWidth: active === index ? '3px' : undefined }}>
							{item.label}
						</span>
					</div>
				)
			})}
		</nav>
	)
}

export default Airbnb
