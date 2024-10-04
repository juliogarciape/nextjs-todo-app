'use server';

export async function createNewTodo() {
	const response = await fetch('/api/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: 'New Todo',
			completed: false,
		}),
	});
	const data = await response.json();

	if (!data.ok) {
		return {
			message: 'Failed to create new todo',
		};
	}

	console.log('New todo created...');
}
