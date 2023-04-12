import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Tag, Space } from 'antd'
import { nanoid } from 'nanoid'
const cacheKey = 'BM-history'

const DarkIcon = () => {
	return (
		<svg viewBox='0 0 1024 1024' width='40' height='40'>
			<path d='M611.370667 167.082667a445.013333 445.013333 0 0 1-38.4 161.834666 477.824 477.824 0 0 1-244.736 244.394667 445.141333 445.141333 0 0 1-161.109334 38.058667 85.077333 85.077333 0 0 0-65.066666 135.722666A462.08 462.08 0 1 0 747.093333 102.058667a85.077333 85.077333 0 0 0-135.722666 65.024z' fill='#FFB531' />
			<path d='M329.728 274.133333l35.157333-35.157333a21.333333 21.333333 0 1 0-30.165333-30.165333l-35.157333 35.157333-35.114667-35.157333a21.333333 21.333333 0 0 0-30.165333 30.165333l35.114666 35.157333-35.114666 35.157334a21.333333 21.333333 0 1 0 30.165333 30.165333l35.114667-35.157333 35.157333 35.157333a21.333333 21.333333 0 1 0 30.165333-30.165333z' fill='#030835' className='dark:BM-fill-darkTextWhite' />
		</svg>
	)
}

const LightIcon = () => {
	return (
		<svg viewBox='0 0 1028 1024' width='40' height='40'>
			<path d='M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z' fill='#FFC445' />
			<path
				d='M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z'
				fill='#FFC445'
			/>
		</svg>
	)
}

/*搜索栏*/
const SearchBar = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [history, setHistory] = useState<Array<string>>([])
	const [historyVisible, setHistoryVisible] = useState<boolean>(false)
	const historyBlockRef = useRef<HTMLDivElement>(null)

	//输入框enter事件
	const inputEnter = useCallback((e: any) => {
		const val: string = inputRef.current?.value || ''
		if (e.keyCode === 13) {
			if (val.trim()) {
				const setItem = new Set([val.trim(), ...history])
				const newHistory = [...setItem]
				setHistory(newHistory)
				localStorage.setItem(cacheKey, JSON.stringify(newHistory))
			}
			window.open(`https://www.baidu.com/s?wd=${val}`, '_blank')
		}
	}, [])

	//点击搜索事件
	const handleSearch = useCallback(() => {
		const val: string = inputRef.current?.value || ''
		if (val.trim()) {
			const setItem = new Set([val.trim(), ...history])
			const newHistory = [...setItem]
			setHistory(newHistory)
			localStorage.setItem(cacheKey, JSON.stringify(newHistory))
		}
		window.open(`https://www.baidu.com/s?wd=${val}`, '_blank')
	}, [])

	//清空历史
	const handleClear = useCallback(() => {
		localStorage.removeItem(cacheKey)
		setHistory([])
	}, [])

	//删除某一个历史
	const removeHistoryByIndex = (index: number) => {
		const historyArr = JSON.parse(JSON.stringify(history))
		historyArr.splice(index, 1)
		setHistory(historyArr)
		localStorage.setItem(cacheKey, JSON.stringify(historyArr))
	}

	useEffect(() => {
		let cacheHistory = localStorage.getItem('BM-history')
		if (cacheHistory) {
			setHistory(JSON.parse(cacheHistory))
		}

		function bodyHandle(e: MouseEvent) {
			e.stopPropagation()
			if (!historyBlockRef.current?.contains(e.target as Node)) {
				setHistoryVisible(false)
			}
		}

		function visibilityHandle() {
			inputRef.current?.blur()
			setHistoryVisible(false)
		}

		document.addEventListener('click', bodyHandle)
		document.addEventListener('visibilitychange', visibilityHandle)
		return () => {
			document.removeEventListener('click', bodyHandle)
			document.removeEventListener('visibilitychange', visibilityHandle)
		}
	}, [])

	return (
		<div className='BM-h-60 BM-bg-white BM-relative BM-rounded-full BM-flex BM-items-center BM-justify-center BM-flex-1 BM-p-[0.5em] dark:BM-bg-darkWhite' ref={historyBlockRef}>
			<svg className='BM-px-[1em] BM-hidden md:BM-block' viewBox='0 0 1024 1024' width='25' height='25'>
				<path d='M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z' fill='#666666' className='dark:BM-fill-darkTextWhite' />
			</svg>
			<input type='text' placeholder='百度一下' ref={inputRef} onKeyUp={inputEnter} className='BM-pl-[1em] BM-bg-transparent BM-flex-1 BM-h-full dark:BM-caret-main dark:BM-text-darkTextWhite dark:placeholder:BM-text-darkTextWhite' onFocus={() => setHistoryVisible(true)} />
			<button className='BM-h-full BM-rounded-full BM-w-[5em] BM-bg-main BM-text-white BM-cursor-pointer hover:BM-bg-mHover' onClick={handleSearch}>
				搜索
			</button>
			<dl className='BM-absolute BM-left-0 BM-top-[120%] BM-rounded-20 BM-bg-white BM-w-full BM-z-10 BM-shadow-lg BM-p-20 dark:BM-bg-darkWhite' style={{ display: historyVisible ? 'block' : 'none' }}>
				<dt className='BM-text-999 dark:BM-text-darkTextWhite dark:BM-border-dark1f BM-text-14 BM-mb-10 BM-pb-10 BM-border-[1px] BM-border-solid BM-border-gray-200 BM-border-r-0 BM-border-t-0 BM-border-l-0 BM-flex BM-justify-between BM-items-center'>
					最近搜索
					<svg className='BM-fill-999 BM-cursor-pointer dark:BM-fill-darkTextWhite' viewBox='0 0 1024 1024' width='20' height='20' onClick={handleClear}>
						<path d='M896 196.923077H649.846154V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231h-118.153846c-43.323077 0-78.769231 35.446154-78.769231 78.769231v78.769231H128c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h768c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 137.846154c0-11.815385 7.876923-19.692308 19.692308-19.692308h78.76923c11.815385 0 19.692308 7.876923 19.692308 19.692308v59.076923h-118.153846V137.846154z m364.307692 256h-610.461538c-15.753846 0-29.538462 13.784615-29.538462 29.538461V886.153846c0 55.138462 43.323077 98.461538 98.461539 98.461539h472.615384c55.138462 0 98.461538-43.323077 98.461539-98.461539V423.384615c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 827.076923c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z m196.923077 0c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z' />
					</svg>
				</dt>
				<dd className='BM-text-666 BM-text-16 BM-max-h-[400px] BM-overflow-y-auto beautyScroll'>
					<Space size={[0, 8]} wrap color='blue'>
						{history.map((item, index) => (
							<Tag closable key={nanoid()} onClose={() => removeHistoryByIndex(index)}>
								{item}
							</Tag>
						))}
					</Space>
				</dd>
			</dl>
		</div>
	)
}

/*暗黑模式按钮*/
const DarkBtn = () => {
	const [isDark, setIsDark] = useState(false)

	const darkModel = useCallback(() => {
		const newIsDark = !isDark
		if (newIsDark) {
			document.documentElement.classList.add('BM-dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('BM-dark')
			localStorage.removeItem('theme')
		}
		setIsDark(newIsDark)
	}, [isDark])

	useEffect(() => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		const localTheme = localStorage.getItem('theme')
		const isDark = localTheme === 'dark' || (!localTheme && prefersDarkScheme)
		document.documentElement.classList.toggle('BM-dark', isDark)
		setIsDark(isDark)
	}, [])

	return (
		<div className='BM-w-60 BM-h-60 BM-bg-white BM-mx-[1em] BM-rounded-full BM-flex BM-items-center BM-justify-center BM-cursor-pointer BM-shrink-0 dark:BM-bg-darkWhite' onClick={darkModel}>
			{isDark ? <DarkIcon /> : <LightIcon />}
		</div>
	)
}

const Header: React.FC = () => {
	return (
		<header className='BM-flex BM-justify-center'>
			<SearchBar />
			<DarkBtn />
		</header>
	)
}

export default Header
