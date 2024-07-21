import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleSave = () => {
    updateTodo({
      name,
      description,
      status,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <span
            className={`status ${status === 'completed' ? 'completed' : 'not-completed'}`}
            onClick={() => setStatus(status === 'completed' ? 'not completed' : 'completed')}
          >
            {status}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTodo}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
