import Logo from './modules/Logo'
import Menus from './modules/Menus'
import Header from './modules/Header'
import { useState, useMemo } from 'react'
import connect from '@/assets/img/connect.svg'
import { Image } from 'antd'
import logo from '@/assets/logo.svg'
import imgLoading from '@/assets/img/img-loading.svg'
import { useTransition, animated } from '@react-spring/web'

function Items({ itemData }: { itemData: Array<BM.MenuItem> }) {
	const transition = useMemo(() => {
		return useTransition(itemData, {
			trail: 400 / itemData.length,
			from: { opacity: 0, transform: 'scale3d(0,0,0)' },
			enter: { opacity: 1, transform: 'scale3d(1,1,1)' },
			config: {
				tension: 500,
				friction: 50
			}
		})
	}, [itemData])

	return (
		<main className='BM-bg-white BM-rounded-[20px_20px_0_0] BM-grid BM-gap-20 BM-grid-rows-auto BM-p-20 BM-auto-rows-[176px] BM-grid-cols-[repeat(auto-fill,minmax(160px,1fr))] BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkWhite' style={{ height: 'calc(100vh - 160px)' }}>
			{transition((style, item) => (
				<animated.a target='_blank' href={item.link} className='item hover:BM-drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] dark:hover:BM-drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]' style={style} key={item.link}>
					<Image width={40} className='BM-rounded-10' src={item.icon} preview={false} fallback={logo} placeholder={<Image preview={false} src={imgLoading} width={40} />} />
					<h1 className='BM-text-333 BM-py-[1em] BM-text-20 dark:BM-text-white'>{item.text}</h1>
					<p className='BM-text-12 BM-text-999 BM-px-[1em] BM-leading-[1.2em] dark:BM-text-darkTextWhite' style={{ height: item.desc ? 'auto' : '1em' }}>
						{item.desc}
					</p>
				</animated.a>
			))}
		</main>
	)
}

function App() {
	const [itemData, setItemData] = useState<Array<BM.MenuItem>>([])
	const [sideVisible, setSideVisible] = useState(false)

	return (
		<div className='lg:BM-grid lg:BM-grid-cols-[300px_1fr] BM-h-screen BM-bg-1f BM-select-none dark:BM-bg-dark1f'>
			<aside className='BM-pl-2em BM-bg-white BM-text-666 BM-relative dark:BM-bg-darkWhite lg:BM-rounded-[0_20px_0_0]'>
				<Logo setSideVisible={setSideVisible} />
				<Menus setItemData={setItemData} sideVisible={sideVisible} setSideVisible={setSideVisible} />
				<a className='BM-absolute BM-bottom-20 BM-left-20 BM-right-20 BM-h-60 BM-bg-1f BM-rounded-full BM-items-center BM-px-30 BM-text-666 dark:BM-bg-dark1f dark:BM-text-darkTextWhite BM-hidden lg:BM-flex' href='mailto:303278055@qq.com'>
					<img src={connect} alt='' />
					<div className='BM-ml-[0.5em]'>
						<span className='BM-text-16'>联系作者</span>
						<p className='BM-text-18 BM-mt-5 BM-tracking-wide DIN'>303278055@qq.com</p>
					</div>
				</a>
			</aside>
			<div className='BM-px-10 BM-flex BM-flex-col BM-gap-30 BM-pt-30 md:BM-px-20 lg:BM-px-30 xl:BM-px-30 2xl:BM-px-30'>
				<Header />
				<Items itemData={itemData} />
			</div>
		</div>
	)
}

export default App
