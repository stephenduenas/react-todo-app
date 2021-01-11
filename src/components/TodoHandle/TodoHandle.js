import React from 'react';
import './TodoHandle.scss';

const TodoHandle = ({todo_list, onSetTodo, filter, onSetFilter}) => {

    const FILTERS = ['All', 'Active', 'Completed'];

    const onFilterClick = (iFilter) => {
        onSetFilter(FILTERS[iFilter]);
    }

    const onClearClick = () => {
        localStorage.removeItem('todo_list');
        onSetTodo([]);
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
