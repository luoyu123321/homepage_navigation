import FullData from '@/assets/json'
import Logo from '@/components/Logo'
import { Breadcrumb, Button, Select, Tooltip } from '@douyinfe/semi-ui'
import { Home, LeftOne, ThumbsUp } from '@icon-park/react'
import { useEffect, useState } from 'react'
import BaiduSearch from './modules/BaiduSearch'
import DarkBtn from './modules/DarkBtn'
import Items from './modules/Items'
//@ts-ignore
import packageJson from '/package.json'

function Header() {
	return (
		<header className='flex h-80 items-center justify-between border-b border-b-transparent px-20 dark:border-b-borderDark dark:bg-bgDark-2' style={{ borderBottomStyle: 'solid' }}>
			<div className='flex items-center'>
				<div className='mr-10'>
					<Logo />
				</div>
				<BaiduSearch />
			</div>
			<div className='flex items-center space-x-10'>
				<Tooltip content='觉得不错？点个赞支持一下！' position='left'>
					<Button icon={<ThumbsUp theme='outline' />} onClick={() => window.open('https://gitee.com/robin901118/homepage_navigation', '_blank')} type='tertiary' size='large' />
				</Tooltip>
				<DarkBtn />
				<Select defaultValue='default' style={{ width: 120 }} size='large'>
					<Select.Option value='default'>默认主题</Select.Option>
					<Select.Option value='ulikecam' disabled={true}>
						敬请期待
					</Select.Option>
				</Select>
			</div>
		</header>
	)
}

function DefaultTheme() {
	//当前页面的书签
	const [currentData, setCurrentData] = useState<BM.Item[]>([])
	//面包屑数据
	const [breadData, setBreadData] = useState<BM.Item[]>([])

	useEffect(() => setCurrentData(FullData), [])
	//新增面包屑
	const addBreadData = (item: BM.Item) => {
		if (item.children && item.children.length) {
			setBreadData(old => [...old, item])
			setCurrentData(item.children)
		}
	}
	//删除面包屑（点击返回的时候调用）
	const removeBreadData = () => {
		setBreadData(oldState => {
			if (oldState.length) {
				const readyState = oldState.slice(0, -1)
				if (oldState.length <= 1) {
					setCurrentData(FullData)
				} else {
					setCurrentData(readyState?.at(-1)?.children || FullData)
				}
				return readyState
			} else {
				return oldState
			}
		})
	}
	//点击面包屑item
	const breadItemClickHandle = (index?: number) => {
		if (index == undefined) {
			setCurrentData(FullData)
			setBreadData([])
		} else {
			const readyState = breadData.slice(0, index + 1)
			setBreadData(readyState)
			setCurrentData(readyState?.at(-1)?.children || FullData)
		}
	}

	return (
		<div className='flex h-screen flex-col bg-bgLight dark:bg-bgDark'>
			<Header />
			{!!breadData.length && (
				<div className='center group fixed left-10 top-2/4 z-10 h-40 w-40 -translate-y-2/4 cursor-pointer rounded-full border border-solid border-transparent bg-slate-300 text-20 text-white hover:w-auto hover:bg-slate-400 dark:border-borderDark dark:bg-bgDark-2' onClick={removeBreadData}>
					<LeftOne theme='filled' />
					<span className='hidden overflow-hidden truncate pr-10 group-hover:block'>返回</span>
				</div>
			)}
			<main
				className='grid-rows-auto beautyScroll grid flex-1 gap-20 overflow-y-auto p-20 pb-20'
				style={{
					gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
					gridAutoRows: '160px'
				}}
			>
				<Items data={currentData} callback={addBreadData} />
			</main>
			<div className='flex h-30 items-center justify-between border-t border-t-transparent bg-white px-10 dark:border-t-borderDark dark:bg-bgDark-2' style={{ borderTopStyle: 'solid' }}>
				<Breadcrumb compact={false}>
					<Breadcrumb.Item
						onClick={() => breadItemClickHandle()}
						icon={
							<span>
								<Home theme='outline' />
							</span>
						}
					/>
					{breadData.map((item, index) => (
						<Breadcrumb.Item key={item.label} onClick={() => breadItemClickHandle(index)}>
							{item.label}
						</Breadcrumb.Item>
					))}
				</Breadcrumb>
				<span className='text-12 text-slate-600 dark:text-white'>当前版本：{packageJson.version}</span>
			</div>
		</div>
	)
}

export default DefaultTheme
