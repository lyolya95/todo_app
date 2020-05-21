import React, { Component } from 'react';
import './PanelAddItem.css';

export class PanelAddItem extends Component {
  render() {
    const { onAddItem } = this.props;
    return (
      <div className="panel-add-item">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            onAddItem('ggggggg');
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
