import { Protest_Strike } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import logoTodo from '../../public/logo-todo.png'

const protestFont = Protest_Strike({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
})

export default function Header() {
	return (
		<header
			className={`flex items-center content-between bg-slate-500 mb-8 text-white px-3 py-2`}
		>
			<div className="flex items-center gap-2">
				<Image
					src={logoTodo}
					width={50}
					height={50}
					alt="Logo Todo App"
				/>
				<h3 className={`${protestFont.className} text-3xl`}>
					Todo App
				</h3>
			</div>
			<nav className="flex gap-3 *:text-lg *:text-slate-300">
				<Link className="link" href="/new">
					New
				</Link>
				<Link className="link active" href="/">
					List
				</Link>
				<Link className="link" href="/settings">
					Settings
				</Link>
			</nav>
		</header>
	)
}
