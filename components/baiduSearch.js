'use client'
import { Input } from '@douyinfe/semi-ui'
import React, { useRef } from 'react'

export default function () {
	const inputRef = useRef(null)

	const search = val => {
		const baiduLink = 'https://www.baidu.com/s?wd='
		window.open(baiduLink + val.trim(), '_blank')
		setTimeout(() => {
			inputRef.current && (inputRef.current.value = '')
		}, 0)
	}

	const inputEnter = function (e) {
		const val = inputRef.current?.value || ''
		e.key === 'Enter' && search(val)
	}

	return <Input placeholder='百度一下' size='large' ref={inputRef} showClear onKeyUp={e => inputEnter(e)} />
}