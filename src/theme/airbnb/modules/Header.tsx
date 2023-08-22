import Logo from '@/components/Logo'
import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect, useRef } from 'react'
import Settings from '@/components/Settings'
import SearchInput from '@/components/SearchInput'

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
			<animated.div className='BM-bg-white BM-px-30 BM-fixed BM-top-0 BM-left-0 BM-w-full BM-min-w-[1100px] BM-z-10 dark:BM-bg-dark1f' style={{ borderBottom: '1px solid rgba(0,0,0,.1)', zIndex: 999, ...bgSprings }}>
				<div
					className='BM-h-80 BM-flex BM-items-center'
					style={{
						position: 'relative',
						zIndex: 10
					}}
				>
					<Logo />
					<animated.h1 className='BM-absolute BM-top-20 BM-left-2/4 BM-font-thin BM-text-30 BM-text-666 dark:BM-text-white' style={{ ...titSprings }}>
						百度搜索
					</animated.h1>
					<animated.div className='BM-h-46 BM-rounded-[46px] BM-flex BM-w-[200px] BM-items-center BM-justify-end BM-px-5 BM-mx-auto BM-cursor-pointer BM-bg-white BM-overflow-hidden dark:BM-bg-darkItem BM-border-[1px] BM-border-solid BM-border-[#ddd] dark:BM-border-dark1f' style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)', ...springs }} onClick={handleClick}>
						<SearchInput placeholder={isOpen ? '请输入关键词' : '搜索'} />
					</animated.div>
					<div className='BM-flex BM-items-center BM-justify-end' style={{ width: '214px' }}>
						<Settings />
					</div>
				</div>
			</animated.div>
			{isOpen ? <div className='BM-fixed BM-w-screen BM-h-screen BM-left-0 BM-right-0 BM-bg-black/30 BM-z-[998]' onClick={closeHandle} /> : null}
		</>
	)
}

export default Header
