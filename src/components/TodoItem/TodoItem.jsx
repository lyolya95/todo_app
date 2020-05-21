import React from 'react';
import './TodoItem.css';

export const TodoItem = (props) => {
  const { todo, onDeleteItem, onToggleDone, onToggleImportant, done, important } = props;

  let todoListItem = 'todo-list-item d-flex';
  if (done) {
    todoListItem += ' done';
  }
  if (important) {
    todoListItem += ' important';
  }
  return (
    <span className={todoListItem}>
      <span className="todo-list-item-name" onClick={onToggleDone}>
        {todo}
      </span>
      <span className="item-button">
        <button type="button" className="btn btn-outline-success btn-sm" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleteItem}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </span>
  );
};
