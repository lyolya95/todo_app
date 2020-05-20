import React, { Component } from 'react';
import './AppHeader.css';

export class AppHeader extends Component {
  render() {
    return (
      <div className="app-header d-flex">
        <h1>Todo list</h1>
        <h2>count</h2>
      </div>
    );
  }
}
