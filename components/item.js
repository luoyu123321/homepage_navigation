'use client'
import { animated, useTransition } from '@react-spring/web'
import Style from './item.module.css'
import { Image as AntdImage } from 'antd'
import Link from 'next/link'
import Image from 'next/image'

function MyImage({ url }) {
	const base = process.env.NODE_ENV === 'production' ? '/homepage_navigation' : ''
	return <AntdImage height={40} width={'80%'} className='object-scale-down object-center' src={url} preview={false} fallback={base + '/BM.svg'} placeholder={<AntdImage preview={false} src={base + '/img-loading.svg'} height={40} width={'100%'} className='object-center' />} />
}

export default function (props) {
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
	const className = Style.item + ' block bg-white/60 hover:bg-white dark:bg-bgDark-2 dark:border-borderDark dark:text-white dark:hover:bg-black'

	return (
		<>
			{transition((style, item) => {
				if (item.type === 1) {
					return (
						<animated.a className={className} style={style} target='_blank' href={item.link} title={item.desc || item.label}>
							{item.icon ? <MyImage url={item.icon} /> : <Image src={require('@/public/BM.svg').default} alt={''} sizes={'40px'} style={{ width: '40px', height: 'auto' }} />}
							<h6 className='text-16 mt-10 font-normal'>{item.label}</h6>
						</animated.a>
					)
				} else {
					return (
						<Link href={item.path}>
							<animated.div className={className} style={style}>
								<Image src={require('@/public/folder.svg').default} alt={''} sizes={'40px,auto'} style={{ width: '40px', height: 'auto' }} />
								<h6 className='text-16 mt-10 font-normal'>{item.label}</h6>
							</animated.div>
						</Link>
					)
				}
			})}
		</>
	)
}
