import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import './TodoItem.scss';
import IconCross from '../../images/icon-cross.svg';
import IconCheck from '../../images/icon-check.svg';

const TodoItem = ({oItem, iIndex, onCheckClick, onRemoveClick, id}) => {
    return (
        <Draggable draggableId={id} index={iIndex}>
            { (provided) => {
                return (
                    <li
                        className="todo__item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <span className={`todo__checkbox ${oItem.is_completed === true ? 'todo__checkbox--checked' : ''}`} onClick={() => { onCheckClick(iIndex); }}>
                            <img className="todo__checkbox__check" src={IconCheck} alt="checkbox"></img>
                        </span>
                        <p>{ oItem.name }</p>
                        <span className="todo__delete" onClick={ () => { onRemoveClick(iIndex); }}>
                            <img src={IconCross} alt="delete button"></img>
                        </span>
                    </li>
                );
            }}
        </Draggable>
        
    );
}

export default TodoItem;
