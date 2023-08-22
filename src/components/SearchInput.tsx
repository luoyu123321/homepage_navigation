import React, { useRef } from 'react'

function SearchInput({ placeholder = '百度一下' }: { placeholder?: string }) {
	const inputRef = useRef<HTMLInputElement>(null)

	const search = (val: string) => {
		const baiduLink = 'https://www.baidu.com/s?wd='
		window.open(baiduLink + val.trim(), '_blank')
		setTimeout(() => {
			inputRef.current && (inputRef.current.value = '')
		}, 0)
	}

	const inputEnter = function (e: React.KeyboardEvent<HTMLInputElement>) {
		const val: string = inputRef.current?.value || ''
		e.key === 'Enter' && search(val)
	}

	//点击搜索事件
	const handleSearch = function () {
		search(inputRef.current?.value || '')
	}

	return (
		<>
			<input type='text' placeholder={placeholder} className='BM-flex-1 BM-w-0 BM-h-full BM-px-10 BM-bg-transparent dark:placeholder:BM-text-white/50 dark:BM-text-white' ref={inputRef} onKeyUp={e => inputEnter(e)} />
			<div className='BM-h-36 BM-w-36 BM-bg-main BM-rounded-full BM-flex BM-items-center BM-justify-center BM-shrink-0 BM-cursor-pointer' onClick={handleSearch}>
				<svg viewBox='0 0 1024 1024' width='20' height='20'>
					<path d='M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z' fill='#fff' />
				</svg>
			</div>
		</>
	)
}

export default SearchInput
