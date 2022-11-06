import React from "react";
import './Filter.css';

const Filter = ({ isPending = true, onChange }) => {
  return (
    <div className="filter-container">
      <input className="filter" onChange={onChange} />
      {isPending && <div className="filter-spinner" />}      
    </div>
  );
};

export default Filter;