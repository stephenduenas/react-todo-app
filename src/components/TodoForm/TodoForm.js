import React, { useRef } from 'react';
import './TodoForm.scss';

const TodoForm = ({todo_list, onSetTodo}) => {

    const inputEl = useRef(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
        addTodo();
    }

    const addTodo = () => {
        const TODO_ITEM_NAME = inputEl.current.value;
        const NEW_TODO_LIST = [...todo_list];
        const TODO_ITEM = {
            is_completed: false,
            name: TODO_ITEM_NAME
        };
        if (TODO_ITEM_NAME.length === 0) {
            return;
        }
        NEW_TODO_LIST.push(TODO_ITEM);
        localStorage.setItem('todo_list', JSON.stringify(NEW_TODO_LIST))
        onSetTodo([...NEW_TODO_LIST]);
        inputEl.current.value = '';
    };

    const validateInput = () => {
        const TODO_ITEM_NAME = inputEl.current.value;
        if (TODO_ITEM_NAME.length > 50) {
            inputEl.current.value = TODO_ITEM_NAME.slice(0, 50);
        }
    };

    return (
        <form className="todo__form" onSubmit={e => onFormSubmit(e)}>
            <span className="todo__checkbox" onClick={addTodo}></span>
            <label htmlFor="todo_name"></label>
            <input name="todo_name" id="todo_name" ref={inputEl} type="text" placeholder="Create a new todo..." onChange={ validateInput }></input>
            <input type="submit"></input>
        </form>
    );
};

export default TodoForm;
