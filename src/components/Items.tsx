import imgLoading from '@/assets/img/img-loading.svg'
import logo from '@/assets/logo.svg'
import { animated, useTransition } from '@react-spring/web'
import { Image } from 'antd'
type Props = { links: Array<BM.MenuItem>; width?: string; height?: string }

function Items({ links, width = '160px', height = '176px' }: Props) {
	const transition = useTransition(links, {
		trail: 400 / links.length,
		from: { opacity: 0, transform: 'scale3d(0,0,0)' },
		enter: { opacity: 1, transform: 'scale3d(1,1,1)' },
		config: {
			tension: 500,
			friction: 50
		}
	})

	return (
		<main
			className='BM-grid-rows-auto BM-grid BM-gap-20'
			style={{
				gridTemplateColumns: `repeat(auto-fill,minmax(${width},1fr))`,
				gridAutoRows: height
			}}
		>
			{transition((style, item) => (
				<animated.a target='_blank' href={item.link} className='BM-flex BM-h-full BM-cursor-pointer BM-flex-col BM-items-center BM-justify-center BM-overflow-hidden BM-rounded-20 BM-bg-1f BM-no-underline hover:BM-drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] dark:BM-bg-darkItem dark:hover:BM-drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]' style={style} key={item.link}>
					<Image height={40} width={'80%'} className='BM-rounded-10 BM-object-scale-down BM-object-center' src={item.icon} preview={false} fallback={logo} placeholder={<Image preview={false} src={imgLoading} height={40} width={'100%'} className='BM-object-center' />} />
					<h1 className='BM-py-[1em] BM-text-20 BM-text-333 dark:BM-text-white'>{item.text}</h1>
					<p className='BM-px-[1em] BM-text-12 BM-leading-[1.2em] BM-text-999 dark:BM-text-darkTextWhite' style={{ height: item.desc ? 'auto' : '1em' }}>
						{item.desc}
					</p>
				</animated.a>
			))}
		</main>
	)
}

export default Items
