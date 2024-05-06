import Logo from '@/components/Logo'
import { themeOptions, themeStore } from '@/store'
import { Button, Select, Tooltip } from '@douyinfe/semi-ui'
import { ThumbsUp } from '@icon-park/react'
import { useAtom, useAtomValue } from 'jotai'
import BaiduSearch from './BaiduSearch'
import DarkBtn from './DarkBtn'

function Header() {
	const themeOptionsAtom = useAtomValue(themeOptions)
	const [currentTheme, setCurrentTheme] = useAtom(themeStore)

	return (
		<header className='flex h-80 items-center justify-between border-b border-b-transparent px-20 dark:border-b-borderDark dark:bg-bgDark-2' style={{ borderBottomStyle: 'solid' }}>
			<div className='flex items-center'>
				<div className='mr-10'>
					<Logo />
				</div>
				<BaiduSearch />
			</div>
			<div className='flex items-center space-x-10'>
				{/* <Tooltip content='觉得不错？点个赞支持一下！' position='left'>
					<Button icon={<ThumbsUp theme='outline' />} onClick={() => window.open('https://gitee.com/robin901118/homepage_navigation', '_blank')} type='tertiary' size='large' />
				</Tooltip> */}
				<DarkBtn />
				{/* <Select defaultValue={currentTheme} style={{ width: 120 }} size='large' optionList={themeOptionsAtom} onChange={e => setCurrentTheme(e as string)} /> */}
			</div>
		</header>
	)
}

export default Header
