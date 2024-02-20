import DarkBtn from './darkBtn'
import BaiduSearch from './baiduSearch'
import SupportBtn from './supportBtn'
import Image from 'next/image'

export default function () {
	return (
		<header className='dark:border-b-borderDark dark:bg-bgDark-2 flex h-80 items-center justify-between border-b border-b-transparent px-20' style={{ borderBottomStyle: 'solid' }}>
			<div className='flex flex-1 items-center'>
				<div className='mr-10'>
					<div className='flex h-80 items-center'>
						<Image src={require('@/public/BM.svg').default} alt='' width={30} height={30} className='mr-10' />
						<span className='text-333 text-26 whitespace-nowrap'>
							<b className='DIN text-main align-[2px] font-bold'>BM</b>
							<span className='align-[2px] font-thin dark:text-white'>快捷导航</span>
						</span>
					</div>
				</div>
				<div className='w-[300px]'>
					<BaiduSearch />
				</div>
			</div>
			<div className='flex items-center space-x-10'>
				<SupportBtn />
				<DarkBtn />
			</div>
		</header>
	)
}
