import React from 'react';
const ToDo = ({todo, handleToggle}) => {

    const handleClick = (event) => {
        event.preventDefault()
        handleToggle(event.currentTarget.id)
    }

    
    return (
        <div className={todo.complete ? "todo strike" : "todo"} onClick={handleClick} id={todo.id}>
            {todo.task}
        </div>
    );
};

export default ToDo;