import React, { useState } from 'react';
import { TodoList } from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo !== selectTodo) return todo;

      return {
        ...todo,
        complete: !selectTodo.complete,
      }
    });

    setTodos(newTodos);
  }

  return <TodoList
    todos={todos}
    toggleTogo={toggleTodo}
  />
}

export default App;
