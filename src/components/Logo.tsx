import logo from '@/assets/logo.svg'
//@ts-ignore
import packageJson from '/package.json'

function Logo() {
	return (
		<div className='BM-sticky BM-top-0 BM-flex BM-h-80 BM-items-center BM-justify-start BM-rounded-[0_20px_0_0] BM-pb-10'>
			<img src={logo} className='BM-mr-10 BM-w-30' alt='' />
			<span className='BM-text-26 BM-text-333'>
				<b className='DIN BM-align-[2px] BM-font-bold BM-text-main'>BM</b>
				<span className='BM-align-[2px] BM-font-thin dark:BM-text-white'>快捷导航</span>
				<sub className='DIN BM-ml-[0.5em] BM-align-[2px] BM-text-18 BM-text-main'>v{packageJson.version}</sub>
			</span>
		</div>
	)
}

export default Logo
