import { NextResponse } from 'next/server';

export async function GET(request) {
	const res = await fetch('https://dummyjson.com/todos');
	const data = await res.json();
	return NextResponse.json(data);
}
