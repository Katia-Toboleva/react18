import React from "react";
import './Filter.css';

const Filter = ({ isPending = false, onChange }) => {
  return (
    <div className="filter-container">
      <input className="filter" onChange={onChange} />
      {isPending && <div className="filter-spinner" />}      
    </div>
  );
};

export default Filter;