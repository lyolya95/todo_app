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

  /** Функция меняющая свойство объекта */
  changeProperty(arr, id, property) {
    const index = arr.findIndex((el) => el.id === id);
    const newItem = { ...arr[index], [property]: !arr[index][property] };
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

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
      return {
        todos: this.changeProperty(todos, id, 'done'),
      };
    });
  };

  /** Функция отмечает важность элемента */
  onToggleImportant = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.changeProperty(todos, id, 'important'),
      };
    });
  };

  render() {
    const { todos } = this.state;
    const doneCount = todos.filter((el) => el.done).length;
    const notDone = todos.length - doneCount;
    return (
      <div className="app">
        <AppHeader done={doneCount} notDone={notDone} />
        <div className=" filter d-flex">
          <Search />
          <ButtonFilter />
        </div>
        <TodoList
          todos={todos}
          onDeleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <PanelAddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
