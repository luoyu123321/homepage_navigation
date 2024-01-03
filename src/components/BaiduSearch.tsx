import { Input } from '@douyinfe/semi-ui'
import React, { useRef } from 'react'

const BaiduSearch: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null)

	const search = (val: string) => {
		const baiduLink = 'https://www.baidu.com/s?wd='
		window.open(baiduLink + val.trim(), '_blank')
		setTimeout(() => {
			inputRef.current && (inputRef.current.value = '')
		}, 0)
	}

	const inputEnter = function (e: React.KeyboardEvent<HTMLInputElement>) {
		const val: string = inputRef.current?.value || ''
		e.key === 'Enter' && search(val)
	}

	return <Input placeholder='百度一下' size='large' ref={inputRef} showClear onKeyUp={e => inputEnter(e)} />
}

export default BaiduSearch
