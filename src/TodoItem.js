import React from 'react';

const TodoItem = ({text, completed}) => {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed}/>
            <p>{text}</p>
        </div>
    )
}

export default TodoItem;