import 'normalize.css';
import React, { Component } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import { PanelAddItem } from '../PanelAddItem/PanelAddItem';
import { Search } from '../Search/Search';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

export class App extends Component {
  /** id элемента списка */
  maxId = 1;
  /** id выбранного элемента */
  index = 0;

  state = {
    todos: [
      this.createTodoItem('Drink coffe'),
      this.createTodoItem('Cook porridge'),
      this.createTodoItem('Running in parke'),
      this.createTodoItem('Learn React'),
    ],
  };

  /** Функция создания списка элементов */
  createTodoItem(text) {
    return {
      id: this.maxId++,
      todo: text,
      important: false,
      done: false,
    };
  }

  /** Найти индекс элемента */
  findId = (id) => {
    const { todos } = this.state;
    return (this.index = todos.findIndex((el) => el.id === id));
  };

  /** Удаление элемента по нажатию */
  deleteItem = (id) => {
    this.setState(({ todos }) => {
      this.findId(id);
      const newTodos = [...todos.slice(0, this.index), ...todos.slice(this.index + 1)];
      return {
        todos: newTodos,
      };
    });
  };

  /** Добавление элемента по нажатию */
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todos }) => {
      const newTodos = [...todos, newItem];
      return {
        todos: newTodos,
      };
    });
  };

  /** Функция отмечает "Выполнено" */
  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      this.findId(id);
      const newItem = { ...todos[this.index], done: !todos[this.index].done };
      const newTodos = [...todos.slice(0, this.index), newItem, ...todos.slice(this.index + 1)];
      return {
        todos: newTodos,
      };
    });
  };

  /** Функция отмечает важность элемента */
  onToggleImportant = (id) => {};

  render() {
    return (
      <div className="app">
        <AppHeader />
        <Search />
        <ButtonFilter />
        <TodoList
          todos={this.state.todos}
          onDeleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <PanelAddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
