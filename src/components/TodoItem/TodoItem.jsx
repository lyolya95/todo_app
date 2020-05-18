import React from 'react';
import './TodoItem.css';

export const TodoItem = (props) => {
  const style = {
    color: props.important ? 'tomato' : 'black',
    fontWeight: props.important ? 'bold' : 'normal',
  };
  return (
    <span className="todo-list-item d-flex">
      <span style={style} className="todo-list-item-name">
        {props.todo}
      </span>
      <span className="item-button">
        <button type="button" className="btn btn-outline-success btn-sm">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-outline-danger btn-sm">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </span>
  );
};
