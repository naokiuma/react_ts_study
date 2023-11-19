// import React from 'react'

// type:todos = {
// 	id:number
// }

interface TodolistProps {
	items:{id:string; text:string}[]
}
const Todolist:React.FC<TodolistProps> = props => {
	console.log(props.items)
	return <ul>
		{props.items.map(todo => (
			<li key={todo.id}>{todo.text}</li>
		))}

	</ul>
} 

export default Todolist;