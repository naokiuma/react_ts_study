import React, { useRef } from 'react'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = (props: NewTodoProps) => {
	const textInputRef= useRef<HTMLInputElement>(null)

	console.log(textInputRef)

	const todoSubmitHunder = (event:React.FormEvent) =>{
		event.preventDefault();

		//このフォームをサブミットした時点で、必ず入力はされているのでcurretnがnullということはない。
		//ので、!マークをつける。
		const enterdText = textInputRef.current!.value
		props.onAddTodo(enterdText)
	}


	return(
		<form onSubmit={todoSubmitHunder}>
			<div>
				<label htmlFor="todo-text">Todo内容</label>
				<input type="text" id="todo-text" ref={textInputRef}/>
			</div>
			<button type="submit">Todo追加</button>
		</form>
	)
}

