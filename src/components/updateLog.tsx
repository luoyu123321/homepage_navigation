import { notification } from '@/entryComponent'
import { useEffect } from 'react'
//@ts-ignore
import packageJson from '/package.json'

function UpdateLog() {
	const storageKey = 'BM_version'

	useEffect(() => {
		const cache = localStorage.getItem(storageKey)
		if (!cache || packageJson.version !== cache) {
			notification.open({
				message: `🎉 v${packageJson.version}更新内容 🎉`,
				description: packageJson.updateLog,
				duration: null
			})
			localStorage.setItem(storageKey, packageJson.version)
		}
	}, [])
	return <></>
}

export default UpdateLog
