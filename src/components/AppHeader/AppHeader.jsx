import React, { Component } from 'react';
import './AppHeader.css';

export class AppHeader extends Component {
  render() {
    const { done, notDone } = this.props;
    return (
      <div className="app-header d-flex">
        <h1>Todo list</h1>
        <h2>
          Done {done}, not done {notDone}
        </h2>
      </div>
    );
  }
}
