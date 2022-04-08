import React from "react";
import { COLUMNS } from "./columns";

function Search({ onSubmit }) {
  const searchOpts = {
    condition: {
      type: "",
      value: "",
    },
    status: {
      active: true,
      inactive: false,
    },
    date: {
      from: new Date().toLocaleDateString(),
      to: new Date().toLocaleDateString(),
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>검색어</label>
        <select>
          <option />
          {COLUMNS.map((column) => (
            <option key={column.accessor}>{column.Header}</option>
          ))}
        </select>
        <input name="filter" />
      </div>

      <div>
        <label>가입일</label>
        <input type="date" /> ~ <input type="date" />
      </div>

      <div>
        <label>상태</label>
        <select>
          <option />
          <option value="active">활동</option>
          <option value="inactive">비활동</option>
        </select>
      </div>
      <button>Search</button>
    </form>
  );
}

export default Search;
