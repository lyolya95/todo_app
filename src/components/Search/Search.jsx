import React from 'react';
import './Search.css';

export const Search = (props) => {
  return (
    <input placeholder="search" className="search-input" onChange={props.onSearchValue} value={props.labelSearch} />
  );
};
