export default function Card({ todo }) {
	return (
		<div className="border p-2 my-2">
			<h3 className="text-xl">{todo.todo}</h3>
			<p>{todo.completed ? 'Completed' : 'Not completed'}</p>
		</div>
	)
}
