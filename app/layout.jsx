import Header from './components/Header'
import './global.css'

export const metadata = {
	title: 'NextJS - Todo App',
}

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
