import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoHandle from '../TodoHandle/TodoHandle';
import './Todo.scss';

const Todo = ({dark_mode, onSetDarkMode}) => {

    const LOCAL_STORAGE_NAME = 'todo_list';

    if (!localStorage.getItem(LOCAL_STORAGE_NAME)) {
        const DEFAULT_TODO_LIST = JSON.stringify([
            {
                is_completed: false,
                name: 'Complete Online Javascript Course'
            },
            {
                is_completed: false,
                name: 'Jog around the park 3x'
            },
            {
                is_completed: false,
                name: '10 minutes meditation'
            },
            {
                is_completed: false,
                name: 'Read for 1 hour'
            },
            {
                is_completed: false,
                name: 'Pick up groceries'
            },
            {
                is_completed: false,
                name: 'Complete Todo App on Frontend Mentor'
            },
        ]);
        localStorage.setItem(LOCAL_STORAGE_NAME, DEFAULT_TODO_LIST);
    }
    
    const [filter, setFilter] = useState('All');

    const [todo_list, setTodo] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)));

    const NEW_TODO_LIST = [...todo_list];

    const onCheckClick = (iIndex) => {
        NEW_TODO_LIST[iIndex].is_completed = !NEW_TODO_LIST[iIndex].is_completed;
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(NEW_TODO_LIST));
        setTodo(NEW_TODO_LIST);
    };

    const onRemoveClick = (iIndex) => {
        NEW_TODO_LIST.splice(iIndex, 1);
        NEW_TODO_LIST.length === 0 ? localStorage.removeItem(LOCAL_STORAGE_NAME) : localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(NEW_TODO_LIST));
        setTodo(NEW_TODO_LIST);
    };

    const onDragEnd = ({ source, destination }) => {
        //TODO: reorder our column
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return
        }
        NEW_TODO_LIST.splice(destination.index, 0, NEW_TODO_LIST.splice(source.index, 1)[0]);
        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(NEW_TODO_LIST))
        setTodo(NEW_TODO_LIST);
    };

    const FILTERED_TODO = todo_list.map((oTodo, iIndex) => {
       
        const ID = `${iIndex}${oTodo.name}`;

        if (filter === 'All') {
            return (
                <TodoItem
                    oItem={oTodo}
                    iIndex={iIndex}
                    key={`${ID}`}
                    id={`${ID}`}
                    onCheckClick={onCheckClick}
                    onRemoveClick={onRemoveClick}
                ></TodoItem>
            );
        }

        if (filter === 'Active' && oTodo.is_completed === false) {
            return (
                <TodoItem
                    oItem={oTodo}
                    iIndex={iIndex}
                    key={`${ID}`}
                    id={`${ID}`}
                    onCheckClick={onCheckClick}
                    onRemoveClick={onRemoveClick}
                ></TodoItem>
            );
        }

        if (filter === 'Completed' && oTodo.is_completed === true) {
            return (
                <TodoItem
                    oItem={oTodo}
                    iIndex={iIndex}
                    key={`${ID}`}
                    id={`${ID}`}
                    onCheckClick={onCheckClick}
                    onRemoveClick={onRemoveClick}
                ></TodoItem>
            );
        }

        return null;
    });

    return (
        <div className="todo">
            <TodoHeader dark_mode={dark_mode} onSetDarkMode={onSetDarkMode}/>
            <TodoForm todo_list={todo_list} onSetTodo={setTodo}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="1">
                    {(provided) => {
                        return (
                            <ul className="todo__list"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                { FILTERED_TODO }
                                {provided.placeholder}
                            </ul>
                        );
                    }}
                </Droppable>
            </DragDropContext>
            <TodoHandle todo_list={todo_list} onSetTodo={setTodo} onSetFilter={setFilter} filter={filter}/>
            <p>
                Drag and drop to reorder list
            </p>
        </div>
    );
};

export default Todo;
