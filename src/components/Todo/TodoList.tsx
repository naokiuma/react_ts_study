import { Dispatch } from "react";
import {Todo} from './todo.model'
interface TodolistProps {
    items: { id: string; text: string }[];
	delete_func:(id:string) => void
	// delete_func:Dispatch<Todo[]>//functionがusestateの関数の場合はこう書く
	
}
const Todolist: React.FC<TodolistProps> = (props) => {
    console.log(props.items);
    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>
					{todo.text}
					<button onClick={() => props.delete_func(todo.id)}>削除</button>
				</li>
            ))}
        </ul>
    );
};

export default Todolist;
