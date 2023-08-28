import connect from '@/assets/img/connect.svg'
import setting from '@/assets/setting.svg'
import { appStoreAtom } from '@/store'
import { Button, Drawer, Form, Select, Space, Switch } from 'antd'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

function Setting() {
	const [form] = Form.useForm()
	const [open, setOpen] = useState(false)
	const [appStore, setAppStore] = useAtom(appStoreAtom)

	const onClose = () => {
		setOpen(false)
	}

	/**
	 * +++++++++++++++++++++++++++++++++++
	 * 设置【暗黑/高亮】模式
	 * +++++++++++++++++++++++++++++++++++
	 **/
	const setDark = (isDark: boolean) => {
		if (isDark) {
			document.documentElement.classList.add('BM-dark')
		} else {
			document.documentElement.classList.remove('BM-dark')
		}
	}

	/**
	 * +++++++++++++++++++++++++++++++++++
	 * 初始化的时候，从缓存中取出暗黑模式的参数，并设置
	 * +++++++++++++++++++++++++++++++++++
	 **/
	useEffect(() => {
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		const isDark = appStore.isDark || prefersDarkScheme
		document.documentElement.classList.toggle('BM-dark', isDark)
	}, [])

	useEffect(() => {
		setTimeout(() => {
			open && form.setFieldsValue({ ...appStore })
		}, 0)
	}, [open])

	/**
	 * +++++++++++++++++++++++++++++++++++
	 * 保存设置
	 * +++++++++++++++++++++++++++++++++++
	 **/
	const onSubmitSettings = () => {
		const newSettings = { ...form.getFieldsValue() }
		setDark(newSettings.isDark)
		setAppStore(newSettings)
		onClose()
	}

	return (
		<>
			<div className='BM-flex BM-h-50 BM-w-50 BM-cursor-pointer BM-items-center BM-justify-center BM-rounded-full BM-bg-white hover:BM-bg-[#e5e5e5] dark:BM-bg-darkWhite' onClick={() => setOpen(true)}>
				<img src={setting} alt={''} className='BM-w-30' />
			</div>

			<Drawer
				title='设置'
				placement='right'
				onClose={onClose}
				open={open}
				closeIcon={null}
				extra={
					<Space>
						<Button onClick={onClose}>取消</Button>
						<Button type='primary' onClick={onSubmitSettings}>
							保存
						</Button>
					</Space>
				}
				footer={
					<a className='BM-flex BM-h-60 BM-items-center BM-rounded-full BM-bg-1f BM-px-30 BM-text-666 dark:BM-bg-stone-700 dark:BM-text-darkTextWhite' href='mailto:303278055@qq.com'>
						<img src={connect} alt='' />
						<div className='BM-ml-[0.5em]'>
							<span className='BM-text-16'>联系作者</span>
							<p className='DIN BM-mt-5 BM-text-18 BM-tracking-wide'>303278055@qq.com</p>
						</div>
					</a>
				}
			>
				<Form form={form}>
					<Form.Item name='isDark' label='模式' valuePropName='checked'>
						<Switch
							checkedChildren={
								<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='10' height='10'>
									<path
										d='M676.64 72.373333a21.333333 21.333333 0 0 0-28.426667 24.96c7.733333 32 17.333333 77.973333 17.333334 108.64a407.36 407.36 0 0 1-585.173334 366.4 21.333333 21.333333 0 0 0-30.293333 23.04 469.333333 469.333333 0 0 0 485.333333 385.333334c243.84-11.84 439.413333-212.16 445.76-456.213334a469.333333 469.333333 0 0 0-304.533333-452.16zM512 906.666667a395.306667 395.306667 0 0 1-357.333333-226.4 2.186667 2.186667 0 0 1 2.453333-3.04 480 480 0 0 0 100.96 10.666666 482.506667 482.506667 0 0 0 481.92-481.92v-11.68a2.186667 2.186667 0 0 1 3.466667-1.813333 395.52 395.52 0 0 1 81.44 78.986667A390.826667 390.826667 0 0 1 906.666667 512a395.146667 395.146667 0 0 1-394.666667 394.666667zM202.293333 262.72a8.96 8.96 0 0 0 2.88 0.426667 75.946667 75.946667 0 0 1 75.733334 75.733333 7.626667 7.626667 0 0 0 0.48 2.88 11.52 11.52 0 0 0 22.186666 0 8.746667 8.746667 0 0 0 0.426667-2.88 76 76 0 0 1 75.733333-75.733333 8.746667 8.746667 0 0 0 2.88-0.426667 11.573333 11.573333 0 0 0 0-22.24 8.746667 8.746667 0 0 0-2.88-0.426667A75.946667 75.946667 0 0 1 304 164.32a8.746667 8.746667 0 0 0-0.426667-2.88 11.52 11.52 0 0 0-22.186666 0 7.626667 7.626667 0 0 0-0.48 2.88A75.893333 75.893333 0 0 1 205.386667 240a8.96 8.96 0 0 0-2.88 0.426667 11.573333 11.573333 0 0 0 0 22.24z'
										fill='#fff'
									/>
								</svg>
							}
							unCheckedChildren={
								<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='10' height='10' fill='#fff'>
									<path d='M512 200A312 312 0 1 0 824 512 312 312 0 0 0 512 200z m0 549.333333A237.333333 237.333333 0 1 1 749.333333 512 237.6 237.6 0 0 1 512 749.333333z' />
									<path d='M474.666667 44.32m5.333333 0l64 0q5.333333 0 5.333333 5.333333l0 102.24q0 5.333333-5.333333 5.333334l-64 0q-5.333333 0-5.333333-5.333334l0-102.24q0-5.333333 5.333333-5.333333Z' />
									<path d='M154.935877 207.647092m3.771237-3.771236l45.254833-45.254834q3.771236-3.771236 7.542473 0l72.294597 72.294597q3.771236 3.771236 0 7.542473l-45.254834 45.254834q-3.771236 3.771236-7.542472 0l-72.294597-72.294598q-3.771236-3.771236 0-7.542472Z' />
									<path d='M44.426667 474.613333m5.333333 0l102.24 0q5.333333 0 5.333333 5.333334l0 64q0 5.333333-5.333333 5.333333l-102.24 0q-5.333333 0-5.333333-5.333333l0-64q0-5.333333 5.333333-5.333334Z' />
									<path d='M155.058812 816.193176m3.771236-3.771236l72.294597-72.294598q3.771236-3.771236 7.542473 0l45.254834 45.254834q3.771236 3.771236 0 7.542473l-72.294597 72.294597q-3.771236 3.771236-7.542473 0l-45.254834-45.254834q-3.771236-3.771236 0-7.542472Z' />
									<path d='M474.773333 866.613333m5.333334 0l64 0q5.333333 0 5.333333 5.333334l0 102.24q0 5.333333-5.333333 5.333333l-64 0q-5.333333 0-5.333334-5.333333l0-102.24q0-5.333333 5.333334-5.333334Z' />
									<path d='M736.508185 789.084994m3.771236-3.771236l45.254834-45.254834q3.771236-3.771236 7.542472 0l72.294597 72.294597q3.771236 3.771236 0 7.542473l-45.254834 45.254834q-3.771236 3.771236-7.542472 0l-72.294597-72.294598q-3.771236-3.771236 0-7.542472Z' />
									<path d='M866.773333 474.506667m5.333334 0l102.24 0q5.333333 0 5.333333 5.333333l0 64q0 5.333333-5.333333 5.333333l-102.24 0q-5.333333 0-5.333334-5.333333l0-64q0-5.333333 5.333334-5.333333Z' />
									<path d='M736.439877 234.62232m3.771237-3.771237l72.294597-72.294597q3.771236-3.771236 7.542472 0l45.254834 45.254834q3.771236 3.771236 0 7.542472l-72.294597 72.294598q-3.771236 3.771236-7.542473 0l-45.254833-45.254834q-3.771236-3.771236 0-7.542473Z' />
								</svg>
							}
						/>
					</Form.Item>
					<Form.Item name='themeType' label='风格'>
						<Select
							style={{ width: '100%' }}
							options={[
								{ value: 'default', label: '默认' },
								{ value: 'clean', label: '平铺' },
								{ value: 'floor', label: '楼层' }
							]}
						/>
					</Form.Item>
				</Form>
			</Drawer>
		</>
	)
}

export default Setting
