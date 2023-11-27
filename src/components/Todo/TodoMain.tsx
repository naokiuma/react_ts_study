import { useState } from 'react';
import Todolist from './TodoList';
import { NewTodo } from './NewTodo';
import {Todo} from './todo.model'

export const TodoMain: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([
        { id: 't1', text: 'Tyepscrtコースの完了' },
    ]);
    const todoAddhandler = (input_text: string) => {
        const new_id = 't' + (todos.length + 1);
		//setTodosに一つ前の値として保証できる。usestateで作った関数の仕様。
        setTodos((prev) => [...prev, { id: new_id, text: input_text }]);
    };

	const deleteTodo = (id:string) =>{
		setTodos(prev => prev.filter(todo => todo.id !== id));	
	}

    return (
        <>
            <NewTodo onAddTodo={todoAddhandler} />
            <Todolist items={todos} delete_func={deleteTodo}/>
        </>
    );
};
