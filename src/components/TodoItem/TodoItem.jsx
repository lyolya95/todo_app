import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
  state = {
    done: false,
    important: false,
  };

  /** Функция выполнения элемента списка */
  onHandleClickItem = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  /** Функция замены важности элемента списка */
  onHandleClickImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { todo, onDeleteItem } = this.props;
    const { done, important } = this.state;

    let todoListItem = 'todo-list-item d-flex';
    if (done) {
      todoListItem += ' done';
    }
    if (important) {
      todoListItem += ' important';
    }

    return (
      <span className={todoListItem}>
        <span className="todo-list-item-name" onClick={this.onHandleClickItem}>
          {todo}
        </span>
        <span className="item-button">
          <button type="button" className="btn btn-outline-success btn-sm" onClick={this.onHandleClickImportant}>
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={onDeleteItem}>
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}
