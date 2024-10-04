'use client'

import { useSearchParams } from 'next/navigation'

export default function FilterTodo() {
	const searchParams = useSearchParams()

	function handleFilter() {
		/* const params = new URLSearchParams(searchParams.toString())
		params.set('sort', sortOrder)
		window.history.pushState(null, '', `?${params.toString()}`) */
	}

	return (
		<div className="bg-slate-200 flex justify-between px-4 py-3">
			<div>
				<input type="text" name="" placeholder="Search..." />
			</div>
			<div>
				<select onClick={handleFilter} name="" id="">
					<option value="">Select a Filter</option>
					<option value="">Sort Ascending</option>
					<option value="">Sort Descending</option>
				</select>
			</div>
		</div>
	)
}
