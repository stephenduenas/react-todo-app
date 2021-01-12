import React from 'react';
import './TodoHandle.scss';

const TodoHandle = ({todo_list, onSetTodo, filter, onSetFilter}) => {

    const FILTERS = ['All', 'Active', 'Completed'];

    const onFilterClick = (iFilter) => {
        onSetFilter(FILTERS[iFilter]);
    }

    const onClearClick = () => {
        const FILTERED_TODO_LIST = todo_list.filter((oTodo) => {
            if (oTodo.is_completed === false) {
                return oTodo;
            }
        });
        FILTERED_TODO_LIST.length === 0 ? localStorage.removeItem('todo_list') : localStorage.setItem('todo_list', JSON.stringify(FILTERED_TODO_LIST));
        onSetTodo(FILTERED_TODO_LIST);
    }

    const FILTER_EL = FILTERS.map((sFilter, iIndex) => {
        return (
                <div
                    key={sFilter}
                    className={`${filter === sFilter ? 'todo__handle__filter--active': ''}`}
                    onClick={() => onFilterClick(iIndex)}
                >
                    {sFilter}
                </div>
        );
    });
    
    const TODO_LIST_COUNT = todo_list.reduce((iAccumulator, oCurrentItem) => {
        if (oCurrentItem.is_completed === false) {
            return iAccumulator += 1;
        }
        return iAccumulator;
    }, 0);

    return (
        <div className="todo__handle">
            <div>{TODO_LIST_COUNT} items left</div>
            <div className="todo__handle__filter">
                {FILTER_EL}
            </div>
            <div onClick={onClearClick}>Clear Completed</div>
        </div>
    );
};

export default TodoHandle;
