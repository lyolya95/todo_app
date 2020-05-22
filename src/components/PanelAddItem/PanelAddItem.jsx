import React, { Component } from 'react';
import './PanelAddItem.css';

export class PanelAddItem extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <form className="panel-add-item d-flex">
        <input type="text" placeholder="Enter todo..." className="form-control" onChange={this.onValueChange} />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            onAddItem('ggggggg');
          }}
        >
          Add
        </button>
      </form>
    );
  }
}
