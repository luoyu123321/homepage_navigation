import imgLoading from '@/assets/img/img-loading.svg'
import logo from '@/assets/logo.svg'
import Logo from '@/components/Logo'
import SearchInput from '@/components/SearchInput'
import Settings from '@/components/Settings'
import { GetFullData } from '@/utils'
import { animated, useScroll } from '@react-spring/web'
import { FloatButton, Image } from 'antd'
import { useEffect, useState, useRef } from 'react'

const bgSrc = 'https://api.kdcc.cn'
function DesktopTheme() {
	const { scrollYProgress } = useScroll()
	const [fullData, setFullData] = useState<BM.FullData[]>([])

	useEffect(() => setFullData(GetFullData()), [])

	return (
		<div
			className='BM-min-h-screen'
			style={{
				backgroundImage: `url(${bgSrc})`,
				backgroundPosition: 'top center',
				backgroundSize: '100% 100vh',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed'
			}}
		>
			<div className='BM-mx-auto BM-w-[1300px] BM-pb-10'>
				<header className='BM-sticky BM-top-10 BM-z-10 BM-flex BM-h-60 BM-items-center BM-justify-between BM-rounded-10 BM-bg-white/50 BM-px-10 BM-backdrop-blur-md dark:BM-bg-darkItem/30'>
					<Logo />
					<Settings noBg={true} />
				</header>
				<main>
					<animated.div
						className='BM-flex BM-h-46 BM-cursor-pointer BM-items-center BM-justify-end BM-overflow-hidden BM-rounded-[46px] BM-border-[1px] BM-border-solid BM-border-[#ddd] BM-bg-white BM-px-5 dark:BM-border-dark1f dark:BM-bg-darkItem'
						style={{
							boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
							position: 'fixed',
							left: '50%',
							top: '200px',
							zIndex: 10,
							width: scrollYProgress.to(val => `${Math.max(600 - val * 2000, 400)}px`),
							transform: scrollYProgress.to(val => `translate(-50%,${Math.max(-(val * 2000), -183)}px)`)
						}}
					>
						<SearchInput />
					</animated.div>
					<div
						style={{
							position: 'fixed',
							left: 0,
							top: 0,
							width: '100%',
							backgroundImage: `url(${bgSrc})`,
							backgroundPosition: 'top center',
							backgroundSize: '100% 100vh',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
							height: '80px',
							zIndex: 5
						}}
					/>
					<div style={{ height: 'calc(100vh - 200px)' }} />
					<div>
						{fullData.map((item, index) => {
							return (
								<div key={index}>
									<h1 className='BM-my-10 BM-rounded-10 BM-bg-white/50 BM-px-10 BM-py-10 BM-text-30 BM-backdrop-blur-md dark:BM-bg-darkItem/30 dark:BM-text-white/80'>
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
			</div>
			<FloatButton.BackTop />
		</div>
	)
}

function Item({ item }: { item: BM.MenuItem }) {
	return (
		<a href={item.link} className='BM-flex BM-h-80 BM-items-center BM-rounded-10 BM-bg-white/50 BM-px-10 BM-backdrop-blur-md BM-transition hover:BM-scale-[.98] hover:BM-text-inherit dark:BM-bg-darkItem/30 dark:BM-text-white' target='_blank'>
			<Image height={30} width={30} className='BM-object-scale-down BM-object-center' src={item.icon} preview={false} fallback={logo} placeholder={<Image preview={false} src={imgLoading} height={30} width={30} className='BM-object-center' />} />
			<div className='BM-ml-10 BM-w-0 BM-flex-1'>
				<strong className='BM-text-16'>{item.text}</strong>
				{item.desc ? <p className='BM-w-full BM-truncate BM-text-12 BM-text-[rgba(255,255,255,.7)] dark:BM-text-white/50'>{item.desc}</p> : <p className='BM-w-full BM-truncate BM-text-12 BM-text-[rgba(255,255,255,.7)] dark:BM-text-white/50'>{item.link}</p>}
			</div>
		</a>
	)
}

export default DesktopTheme
