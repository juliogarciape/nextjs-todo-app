import Link from 'next/link'

export default function Header() {
	return (
		<header className="flex flex-col bg-blue-500 mb-8">
			<div className="flex">
				<h3>Todo App</h3>
				<img src="" alt="" />
			</div>
			<nav className="flex">
				<Link className="link active" href="/">
					List
				</Link>

				<Link className="link" href="/new">
					New
				</Link>

				<Link className="link" href="/settings">
					Settings
				</Link>
			</nav>
		</header>
	)
}
