import 'normalize.css';
import React, { Component } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import { Search } from '../Search/Search';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

export class App extends Component {
  state = {
    todos: [
      { id: 1, todo: 'Drink coffe', important: false },
      { id: 2, todo: 'Cook porridge', important: true },
      { id: 3, todo: 'Running in park', important: true },
      { id: 4, todo: 'Learn React', important: true },
    ],
  };

  /** Удаление элемента по нажатию */
  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const index = todos.findIndex((el) => el.id === id);
      const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
      return {
        todos: newTodos,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <Search />
        <ButtonFilter />
        <TodoList todos={this.state.todos} onDeleteItem={this.deleteItem} />
      </div>
    );
  }
}
