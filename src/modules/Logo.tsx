import React, { useCallback } from 'react'
import logo from '@/assets/logo.svg'
//@ts-ignore
import packageJson from '/package.json'

const Logo: React.FC<BM.LogoProps> = ({ setSideVisible }) => {
	const toggleVisible = useCallback(() => {
		setSideVisible(true)
	}, [])

	return (
		<div className='BM-h-80 BM-flex BM-items-center BM-rounded-[0_20px_0_0] BM-justify-center lg:BM-justify-start BM-sticky BM-top-0 BM-pb-10'>
			<img src={logo} className='BM-w-30 BM-mr-10' alt='' />
			<span className='BM-text-26 BM-text-333'>
				<b className='BM-text-main BM-font-bold BM-align-bottom DIN BM-align-[2px]'>BM</b>
				<span className='BM-font-thin dark:BM-text-white BM-align-[2px]'>快捷导航</span>
				<sub className='BM-text-main BM-text-18 BM-ml-[0.5em] DIN BM-align-[2px]'>v{packageJson.version}</sub>
			</span>
			<div className='BM-absolute BM-left-5 BM-top-2/4 BM-translate-y-[-50%] lg:BM-hidden'>
				<svg className='BM-fill-999 BM-cursor-pointer dark:BM-fill-darkTextWhite' viewBox='0 0 1024 1024' width='32' height='32' onClick={toggleVisible}>
					<path d='M120.259456 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z' />
					<path d='M511.999488 512.001023m-117.921713 0a115.236 115.236 0 1 0 235.843426 0 115.236 115.236 0 1 0-235.843426 0Z' />
					<path d='M903.739521 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z' />
				</svg>
			</div>
		</div>
	)
}

export default Logo
