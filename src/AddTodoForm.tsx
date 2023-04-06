import React, { useState } from "react";

interface Props {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return <form>
        <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <button
            type='submit'
            onClick={e => onButtonClick(e)}
        >
            Add Todo
        </button>
    </form>
}

export { AddTodoForm };