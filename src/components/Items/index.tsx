import Folder from '@/assets/img/folder.svg'
import imgLoading from '@/assets/img/img-loading.svg'
import logoImg from '@/assets/logo.svg'
import { animated, useTransition } from '@react-spring/web'
import { Image } from 'antd'
import React from 'react'
import Style from './index.module.scss'

const Items: React.FC<{ data: BM.Item[]; callback: any }> = props => {
	//动画
	const transition = useTransition(props.data, {
		trail: 400 / props.data.length,
		from: { opacity: 0, transform: 'scale3d(0,0,0)' },
		enter: { opacity: 1, transform: 'scale3d(1,1,1)' },
		config: {
			tension: 500,
			friction: 50
		}
	})
	//通用样式
	const className = Style.item + ' bg-white/60 hover:bg-white dark:bg-bgDark-2 dark:border-borderDark dark:text-white dark:hover:bg-black'

	return (
		<>
			{transition((style, item) => {
				if (item.type === 1) {
					return (
						<animated.a className={className} style={style} target='_blank' href={item.link} title={item.desc || item.label}>
							<Image height={40} width={'80%'} className='object-scale-down object-center' src={item.icon} preview={false} fallback={logoImg} placeholder={<Image preview={false} src={imgLoading} height={40} width={'100%'} className='object-center' />} />
							<h6 className='mt-10 text-16 font-normal'>{item.label}</h6>
						</animated.a>
					)
				} else {
					return (
						<animated.div className={className} style={style} onClick={() => props.callback(item)}>
							<img src={Folder} alt='' className='w-1/5' />
							<h6 className='mt-10 text-16 font-normal'>{item.label}</h6>
						</animated.div>
					)
				}
			})}
		</>
	)
}
export default Items
