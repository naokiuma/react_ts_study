import React, { useRef,ReactEventHandler } from 'react'

const NewTodo:React.FC = () =>{
	//ここにはdomオブジェクトが入る(初期値はnull)
	const textInputRef= useRef<HTMLInputElement>(null)

	const todoSubmitHunder = (event:React.FormEvent) =>{
		event.preventDefault();

		//このフォームをサブミットした時点で、必ず入力はされているのでcurretnがnullということはない。
		//ので、!マークをつける。
		const enterdText = textInputRef.current!.value
		console.log(enterdText)
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

export default NewTodo