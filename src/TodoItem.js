import React from 'react';

function TodoItem({ text, onDelete }) {
  return (
    <div>
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;