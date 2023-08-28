import imgLoading from '@/assets/img/img-loading.svg'
import logo from '@/assets/logo.svg'
import Logo from '@/components/Logo'
import SearchInput from '@/components/SearchInput'
import Settings from '@/components/Settings'
import { GetFullData } from '@/utils'
import { FloatButton, Image } from 'antd'
import { useEffect, useState } from 'react'

function FloorTheme() {
	const [fullData, setFullData] = useState<BM.FullData[]>([])

	useEffect(() => {
		setFullData(GetFullData())
	}, [])

	const floorClickHandle = (activeIndex: number) => {
		const activeFloor = document.getElementById('wrapper')?.children[activeIndex] as HTMLDivElement
		activeFloor &&
			window.scrollTo({
				top: activeFloor.offsetTop - 80,
				behavior: 'smooth'
			})
	}

	return (
		<>
			<header className='BM-sticky BM-top-0 BM-z-10 BM-h-80 BM-bg-1f dark:BM-bg-darkWhite'>
				<div className='BM-mx-auto BM-flex BM-h-full BM-w-[1100px] BM-items-center BM-justify-between'>
					<Logo />
					<div className='BM-mx-auto BM-flex BM-h-46 BM-w-[600px] BM-cursor-pointer BM-items-center BM-justify-end BM-overflow-hidden BM-rounded-[46px] BM-border-[1px] BM-border-solid BM-border-[#ddd] BM-bg-white BM-px-5 dark:BM-border-dark1f dark:BM-bg-darkItem' style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)' }}>
						<SearchInput placeholder='请输入关键词' />
					</div>
					<Settings />
				</div>
			</header>
			<main className='BM-pb-20 dark:BM-bg-dark1f'>
				<div className='BM-mx-auto BM-w-[1100px]' id='wrapper'>
					{fullData.map((item, index) => {
						return (
							<div key={index}>
								<h1 className='BM-py-20 BM-text-30 dark:BM-text-white/80'>
									<img src={item.icon} alt='' className='BM-mr-10 BM-align-[-0.2em]' />
									{item.label}
								</h1>
								<div className='BM-grid BM-grid-cols-4 BM-gap-10'>
									{item.children.map((child, childIndex) => (
										<Item item={child} key={`${index}-${childIndex}`} />
									))}
								</div>
							</div>
						)
					})}
				</div>
			</main>
			<FloatButton.BackTop />
			<ul className='BM-fixed BM-left-20 BM-top-2/4 -BM-translate-y-2/4 BM-list-none BM-overflow-hidden BM-rounded-10 BM-bg-slate-100 BM-text-14 dark:BM-bg-darkItem dark:BM-text-white'>
				{fullData.map((item, index) => (
					<li className='BM-cursor-pointer BM-px-10 BM-leading-[300%] hover:BM-bg-slate-200 dark:hover:BM-bg-darkItemHover' key={index} onClick={() => floorClickHandle(index)}>
						{item.label}
					</li>
				))}
			</ul>
		</>
	)
}

function Item({ item }: { item: BM.MenuItem }) {
	return (
		<a href={item.link} className='BM-flex BM-h-80 BM-items-center BM-rounded-10 BM-bg-slate-100 BM-px-10 BM-transition hover:BM-scale-[.98] hover:BM-bg-slate-200 hover:BM-text-inherit dark:BM-bg-darkItem dark:BM-text-white dark:hover:BM-bg-darkItemHover' target='_blank'>
			<Image height={30} width={30} className='BM-object-scale-down BM-object-center' src={item.icon} preview={false} fallback={logo} placeholder={<Image preview={false} src={imgLoading} height={30} width={30} className='BM-object-center' />} />
			<div className='BM-ml-10 BM-w-0 BM-flex-1'>
				<strong className='BM-text-16'>{item.text}</strong>
				{item.desc ? <p className='BM-w-full BM-truncate BM-text-12 BM-text-[rgba(0,0,0,.3)] dark:BM-text-white/30'>{item.desc}</p> : <p className='BM-w-full BM-truncate BM-text-12 BM-text-[rgba(0,0,0,.3)] dark:BM-text-white/30'>{item.link}</p>}
			</div>
		</a>
	)
}

export default FloorTheme
