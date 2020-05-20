import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css';

export const TodoList = ({ todos, onDeleteItem }) => {
  const elements = todos.map((item) => {
    const { id, ...itemRest } = item;
    return (
      <li key={id} className="list-group-item todo-list-item">
        <TodoItem
          {...itemRest}
          onDeleteItem={() => {
            onDeleteItem(id);
          }}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};
