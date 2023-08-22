import logo from '@/assets/logo.svg'
//@ts-ignore
import packageJson from '/package.json'

function Logo() {
	return (
		<div className='BM-h-80 BM-flex BM-items-center BM-rounded-[0_20px_0_0] BM-justify-start BM-sticky BM-top-0 BM-pb-10'>
			<img src={logo} className='BM-w-30 BM-mr-10' alt='' />
			<span className='BM-text-26 BM-text-333'>
				<b className='BM-text-main BM-font-bold DIN BM-align-[2px]'>BM</b>
				<span className='BM-font-thin dark:BM-text-white BM-align-[2px]'>快捷导航</span>
				<sub className='BM-text-main BM-text-18 BM-ml-[0.5em] DIN BM-align-[2px]'>v{packageJson.version}</sub>
			</span>
		</div>
	)
}

export default Logo
