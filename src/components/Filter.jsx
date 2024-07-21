import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <label>Status Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="not completed">Not Completed</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default Filter;
