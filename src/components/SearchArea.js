import React from "react";
import arrow from "../images/icon-arrow.svg";

export default function SearchArea({ handleClick, HandleKeypress }) {
  return (
    <div className="search-section" onClick={handleClick}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="input"
        onKeyPress={HandleKeypress}
      />
      <img src={arrow} alt="enter" className="arrow" />
    </div>
  );
}
