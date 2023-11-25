import { useState } from 'react';
import Todolist from './TodoList';
import { NewTodo } from './NewTodo';

export const TodoMain: React.FC = () => {
    //jsでやる場合
    // const todos = [{id:'t1', text:'Tyepscrtコースの完了'},];
    // todos.push({id:new_id, text:input_text})

    const [todos, setTodos] = useState([
        { id: 't1', text: 'Tyepscrtコースの完了' },
    ]);
    const todoAddhandler = (input_text: string) => {
        const new_id = 't' + (todos.length + 1);
        setTodos((prev) => [...prev, { id: new_id, text: input_text }]);
    };
    return (
        <>
            <NewTodo onAddTodo={todoAddhandler} />
            <Todolist items={todos} />
        </>
    );
};
