'use client'
import { Button } from '@douyinfe/semi-ui'
import { Brightness, Moon } from '@icon-park/react'
import { useEffect, useState } from 'react'

export default function () {
	const [darkState, setDarkState] = useState(0)
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
		const isDark = +darkState === 1 ? 0 : 1
		setDarkState(isDark)
		localStorage.setItem('darkMode', isDark.toString())
	}

	useEffect(() => {
		const isDark = +localStorage.getItem('darkMode')
		document.documentElement.classList.toggle('dark', !!isDark)
		isDark ? document.body.setAttribute('theme-mode', 'dark') : document.body.removeAttribute('theme-mode')
		localStorage.setItem('darkMode', isDark.toString())
	}, [])

	return <Button icon={darkState ? <Moon theme='outline' /> : <Brightness theme='outline' />} type='tertiary' size='large' onClick={toggleDark} />
}