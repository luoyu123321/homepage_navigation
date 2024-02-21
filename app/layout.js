import './globals.css'
import ico from '@/public/favicon.ico'
import AntdRegister from './antdRegister'
import Header from '@/components/header'

export const metadata = {
	icons: [{ rel: 'icon', url: ico.src }]
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body className='bg-bgLight dark:bg-bgDark flex min-h-screen flex-col'>
				<AntdRegister>
					<Header />
					{children}
				</AntdRegister>
			</body>
		</html>
	)
}