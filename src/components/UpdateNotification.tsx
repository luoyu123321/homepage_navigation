import { Notification } from '@douyinfe/semi-ui'
import { useEffect } from 'react'
//@ts-ignore
import packageJson from '/package.json'

function UpdateNotification() {
	const storageKey = 'BM_version'

	useEffect(() => {
		const cache = localStorage.getItem(storageKey)
		if (!cache || packageJson.version !== cache) {
			//目前会报ReactDOM.render的错误，官方建议不理会
			Notification.open({
				title: `🎉 v${packageJson.version}更新内容 🎉`,
				content: (
					<>
						{packageJson.updateLog.split('</br>').map((item: string) => (
							<div key={item}>{item}</div>
						))}
					</>
				),
				duration: 0
			})
			localStorage.setItem(storageKey, packageJson.version)
		}
	}, [])
	return <></>
}

export default UpdateNotification
