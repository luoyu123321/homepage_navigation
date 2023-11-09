import logo from '@/assets/logo.svg'

function Logo() {
	return (
		<div className='flex h-80 items-center'>
			<img src={logo} className='mr-10 w-30' alt='' />
			<span className='text-333 truncate text-26'>
				<b className='DIN align-[2px] font-bold text-main'>BM</b>
				<span className='align-[2px] font-thin dark:text-white'>快捷导航</span>
			</span>
		</div>
	)
}

export default Logo
