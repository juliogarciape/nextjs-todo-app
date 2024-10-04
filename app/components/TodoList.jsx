import Card from './Card'

export default function TodoList({ todos }) {
	return (
		<div>
			Todo List
			<div className="grid">
				{todos.todos.map((todo) => (
					<Card key={todo.id} todo={todo} />
				))}
			</div>
			<div>Pagination</div>
		</div>
	)
}
