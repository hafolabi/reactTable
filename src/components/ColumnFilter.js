import React from "react";

export const ColumnFilter = ({ column }) => {
    const {filterValue, setFilter} = column
  return (
    <span>
      <input
        type="text"
        placeholder="Search..."
        className="columnSearchInput"
        value={filterValue || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
