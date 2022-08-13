import React from "react";

import SearchArea from "./SearchArea";
import ResultingData from "./ResultingData";

export default function ContentContainer({
  handleClick,
  HandleKeypress,
  data,
}) {
  return (
    <div className="content-container">
      <h1 className="primary-heading">IP Address Tracker</h1>
      <SearchArea handleClick={handleClick} HandleKeypress={HandleKeypress} />
      <ResultingData data={data} />
    </div>
  );
}
