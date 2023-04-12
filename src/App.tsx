import Logo from './modules/Logo'
import Menus from './modules/Menus'
import Header from './modules/Header'
import { useState } from 'react'
import connect from '@/assets/img/connect.svg'
import { Image } from 'antd'
import logo from '@/assets/logo.svg'
import imgLoading from '@/assets/img/img-loading.svg'
import { nanoid } from 'nanoid'

function App() {
	const [itemData, setItemData] = useState<Array<MenuItem>>([])
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
				<main className='BM-bg-white BM-rounded-[20px_20px_0_0] BM-grid BM-gap-20 BM-grid-rows-auto BM-p-20 BM-auto-rows-[176px] BM-grid-cols-[repeat(auto-fill,minmax(160px,1fr))] BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkWhite' style={{ height: 'calc(100vh - 160px)' }}>
					{itemData.map((item, index) => {
						return (
							<a target='_blank' href={item.link} className='item hover:BM-drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] dark:hover:BM-drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]' key={nanoid()} data-index={index}>
								<Image width={40} className='BM-rounded-10' src={item.icon} preview={false} fallback={logo} placeholder={<Image preview={false} src={imgLoading} width={40} />} />
								<h1 className='BM-text-333 BM-py-[1em] BM-text-20 dark:BM-text-white'>{item.text}</h1>
								<p className='BM-text-12 BM-text-999 BM-px-[1em] BM-leading-[1.2em] dark:BM-text-darkTextWhite' style={{ height: item.desc ? 'auto' : '1em' }}>
									{item.desc}
								</p>
							</a>
						)
					})}
				</main>
			</div>
		</div>
	)
}

export default App
