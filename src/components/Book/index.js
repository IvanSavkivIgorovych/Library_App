import React from "react";
import "./style.css";

export const Book = ({ count, data }) => {
  return (
    <li className="book-wrapper">
      <span className="book-count">{count}</span>
      <span className={"book-title"}>{data.title}</span>
      <span className="row">
        <span className="pointer" onClick={() => console.log(123)}>
          🗑️
        </span>
        <input
          type="checkbox"
          className="pointer"
          checked={true}
          onChange={() => console.log(123)}
        />
      </span>
    </li>
  );
};
