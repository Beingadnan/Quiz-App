import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to handle input change
  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  // Function to handle adding a new todo
  function handleClick() {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  }

  // Function to handle deleting a todo
  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  // Function to handle clearing all todos
  function handleClearAll() {
    setTodos([]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClearAll}>Clear All</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


