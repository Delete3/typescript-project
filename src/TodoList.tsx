import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
    todos: Todo[];
    toggleTogo: ToggleTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTogo }) => {
    return <ul>
        {todos.map(todo => (
            <TodoListItem
                key={todo.text}
                todo={todo}
                toggleTodo={toggleTogo}
            />
        ))}
    </ul>
}

export { TodoList };