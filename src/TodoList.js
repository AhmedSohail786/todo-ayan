import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;