import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
  onHandleClick = () => {
    console.log(`${this.props.todo}`);
  };

  render() {
    const style = {
      color: this.props.important ? 'tomato' : 'black',
      fontWeight: this.props.important ? 'bold' : 'normal',
    };
    return (
      <span className="todo-list-item d-flex">
        <span style={style} className="todo-list-item-name" onClick={this.onHandleClick}>
          {this.props.todo}
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
  }
}
