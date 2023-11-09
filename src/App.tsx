import UpdateLog from '@/components/updateLog'
import { lazy, Suspense } from 'react'

const DefaultTheme = lazy(() => import('./theme/default'))

function Page() {
	return (
		<Suspense fallback={<GlobalLoading />}>
			<DefaultTheme />
			<UpdateLog />
		</Suspense>
	)
}

/**
 * +++++++++++++++++++++++++++++++++++
 * 初始loading
 * +++++++++++++++++++++++++++++++++++
 **/
function GlobalLoading() {
	return (
		<div className='fixed left-0 right-0 flex h-screen w-screen items-center justify-center bg-main'>
			<svg viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' width='60' height='60'>
				<g
					style={{
						transformBox: 'fill-box',
						transformOrigin: 'center'
					}}
				>
					<animateTransform attributeType='xml' attributeName='transform' type='rotate' values='0 ;360' dur='2s' repeatCount='indefinite' />
					<path d='M599.04 249.6l58.88 119.04c5.12 11.52 16.64 19.2 29.44 21.76L817.92 409.6c32 5.12 44.8 43.52 21.76 66.56l-94.72 92.16c-8.96 8.96-12.8 21.76-11.52 34.56L755.2 733.44c5.12 32-28.16 56.32-56.32 40.96l-117.76-61.44c-11.52-6.4-24.32-6.4-35.84 0l-117.76 61.44c-28.16 15.36-61.44-8.96-56.32-40.96l21.76-130.56c2.56-12.8-2.56-25.6-11.52-34.56l-94.72-92.16c-23.04-23.04-10.24-61.44 21.76-66.56l130.56-19.2c12.8-1.28 23.04-10.24 29.44-21.76l58.88-119.04c16.64-28.16 57.6-28.16 71.68 0z' fill='#FFFFFF' />
				</g>
			</svg>
		</div>
	)
}

export default Page
