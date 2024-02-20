import './globals.css'
import ico from '@/public/favicon.ico'
import Header from '@/components/header'

export const metadata = {
	icons: [{ rel: 'icon', url: ico.src }]
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
