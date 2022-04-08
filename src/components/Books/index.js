import React from "react";

import "./style.css";
import { Book } from "../Book";

export const Books = ({ books }) => {
  return (
    <ul className="books-list">
      {books.map((book, idx) => {
        return <Book key={book.id} data={book} count={idx + 1} />;
      })}
    </ul>
  );
};
