import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          updateTodo={(updatedTodo) => updateTodo(index, updatedTodo)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
