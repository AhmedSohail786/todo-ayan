import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new To-Do"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoForm;