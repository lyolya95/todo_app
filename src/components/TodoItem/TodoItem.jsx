import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onHandleClickItem = () => {
    this.setState({
      done: true,
    });
  };

  onHandleClickImportant = () => {
    this.setState({
      important: true,
    });
  };

  render() {
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
          {this.props.todo}
        </span>
        <span className="item-button">
          <button type="button" className="btn btn-outline-success btn-sm" onClick={this.onHandleClickImportant}>
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}
