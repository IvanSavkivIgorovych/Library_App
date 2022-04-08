import React from "react";
import "./style.css";

export const Book = ({ count, data, onRemoveBook, onReadBook }) => {
  const titleStyle = `book-title ${data.isRead ? "isRead" : ""}`;
  return (
    <li className="book-wrapper">
      <span className="book-count">{count}</span>
      <span className={titleStyle}>{data.title}</span>
      <span className="row">
        <span className="pointer" onClick={() => onRemoveBook(data.id)}>
          🗑️
        </span>
        <input
          type="checkbox"
          className="pointer"
          checked={data.isRead}
          onChange={() => onReadBook(data.id)}
        />
      </span>
    </li>
  );
};
