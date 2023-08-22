import Logo from '@/components/Logo'
import SearchInput from '@/components/SearchInput'
import Settings from '@/components/Settings'
import { animated, useSpring } from '@react-spring/web'
import { useEffect, useRef, useState } from 'react'

function Header() {
	const inputRef = useRef<HTMLInputElement>(null)
	const [springs, api] = useSpring(() => {
		return {
			from: { x: 0, y: 0, width: 200 }
		}
	})
	const [bgSprings, bgApi] = useSpring(() => {
		return {
			from: { height: 80 }
		}
	})
	const [titSprings, titApi] = useSpring(() => {
		return {
			from: { scale: 0, x: '-50%', y: -100 }
		}
	})
	const [isOpen, setOpen] = useState(false)
	const handleClick = () => {
		if (isOpen) return
		api.start({
			to: {
				x: 0,
				y: 80,
				width: 600
			}
		})
		bgApi.start({
			to: { height: 180 }
		})
		titApi.start({
			to: { scale: 1, x: '-50%', y: 0 }
		})
		setOpen(open => !open)
		setTimeout(() => inputRef.current?.focus(), 0)
	}
	const closeHandle = () => {
		api.start({
			to: {
				x: 0,
				y: 0,
				width: 200
			}
		})
		bgApi.start({
			to: { height: 80 }
		})
		titApi.start({
			to: { scale: 0, x: '-50%', y: -100 }
		})
		setOpen(false)
	}

	useEffect(() => {
		window.addEventListener('scroll', closeHandle)
	}, [])

	return (
		<>
			<animated.div className='BM-fixed BM-left-0 BM-top-0 BM-z-10 BM-w-full BM-min-w-[1100px] BM-bg-white BM-px-30 dark:BM-bg-dark1f' style={{ borderBottom: '1px solid rgba(0,0,0,.1)', zIndex: 999, ...bgSprings }}>
				<div
					className='BM-flex BM-h-80 BM-items-center'
					style={{
						position: 'relative',
						zIndex: 10
					}}
				>
					<Logo />
					<animated.h1 className='BM-absolute BM-left-2/4 BM-top-20 BM-text-30 BM-font-thin BM-text-666 dark:BM-text-white' style={{ ...titSprings }}>
						百度搜索
					</animated.h1>
					<animated.div className='BM-mx-auto BM-flex BM-h-46 BM-w-[200px] BM-cursor-pointer BM-items-center BM-justify-end BM-overflow-hidden BM-rounded-[46px] BM-border-[1px] BM-border-solid BM-border-[#ddd] BM-bg-white BM-px-5 dark:BM-border-dark1f dark:BM-bg-darkItem' style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)', ...springs }} onClick={handleClick}>
						<SearchInput placeholder={isOpen ? '请输入关键词' : '搜索'} />
					</animated.div>
					<div className='BM-flex BM-items-center BM-justify-end' style={{ width: '214px' }}>
						<Settings />
					</div>
				</div>
			</animated.div>
			{isOpen ? <div className='BM-fixed BM-left-0 BM-right-0 BM-z-[998] BM-h-screen BM-w-screen BM-bg-black/30' onClick={closeHandle} /> : null}
		</>
	)
}

export default Header
