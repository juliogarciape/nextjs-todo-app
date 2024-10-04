import TodoList from './components/TodoList'
import FilterTodo from './components/FilterTodo'

export default async function Page() {
	const res = await fetch('https://dummyjson.com/todos')
	const data = await res.json()

	if (!res.ok) {
		return 'Failed to fetch todos'
	}

	return (
		<div className="max-w-screen-lg m-auto">
			<FilterTodo />
			<TodoList todos={data} />
		</div>
	)
}
