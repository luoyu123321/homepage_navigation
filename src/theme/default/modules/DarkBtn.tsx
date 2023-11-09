import { darkStore } from '@/store'
import { Button } from '@douyinfe/semi-ui'
import { Brightness, Moon } from '@icon-park/react'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

function DarkBtn() {
	const [darkState, setDarkState] = useAtom(darkStore)

	//切换暗黑模式
	const toggleDark = () => {
		const rootCls = document.documentElement.classList
		const body = document.body
		if (+darkState) {
			rootCls.remove('dark')
			body.removeAttribute('theme-mode')
		} else {
			rootCls.add('dark')
			body.setAttribute('theme-mode', 'dark')
		}
		setDarkState(+darkState === 1 ? 0 : 1)
	}

	useEffect(() => {
		const isDark = +darkState
		document.documentElement.classList.toggle('dark', !!isDark)
		isDark ? document.body.setAttribute('theme-mode', 'dark') : document.body.removeAttribute('theme-mode')
	}, [])

	return <Button icon={darkState ? <Moon theme='outline' /> : <Brightness theme='outline' />} type='tertiary' size='large' onClick={toggleDark} />
}

export default DarkBtn
