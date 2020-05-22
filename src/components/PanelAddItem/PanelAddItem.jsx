import React, { Component } from 'react';
import './PanelAddItem.css';

export class PanelAddItem extends Component {
  state = {
    label: '',
  };

  onValueChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form className="panel-add-item d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          className="form-control"
          onChange={this.onValueChange}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
