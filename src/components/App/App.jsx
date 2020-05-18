import 'normalize.css';
import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { ButtonFilter } from '../ButtonFilter/ButtonFilter';
import { Search } from '../Search/Search';
import { TodoList } from '../TodoList/TodoList';
import './App.css';

const todos = [
  { id: 1, todo: 'Drink coffe', important: false },
  { id: 2, todo: 'Cook porridge', important: true },
  { id: 3, todo: 'Running in park', important: true },
  { id: 4, todo: 'Learn React', important: true },
];

export const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Search />
      <ButtonFilter />
      <TodoList todos={todos} />
    </div>
  );
};
