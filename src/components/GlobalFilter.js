import React from "react";

function GlobalFilter({ filter, setFilter }) {
  console.log(filter);

  return (
    <span style={{ height: "5rem" }}>
      검색:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
}

export default GlobalFilter;
