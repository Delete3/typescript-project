import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

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

  const toggleTodo: ToggleTodo = (selectTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo !== selectTodo) return todo;

      return {
        ...todo,
        complete: !selectTodo.complete,
      }
    });

    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        text: text,
        complete: false,
      }
    ]);
  }

  return <>
    <TodoList
      todos={todos}
      toggleTogo={toggleTodo}
    />
    <AddTodoForm addTodo={addTodo} />
  </>
}

export default App;
