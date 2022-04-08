import React from "react";

import "./style.css";
import { Book } from "../Book";

export const Books = (props) => {
  return (
    <ul className="books-list">
      {props.data.map((book, idx) => {
        return (
          <Book
            key={book.id}
            data={book}
            count={idx + 1}
            onRemoveBook={props.onRemoveBook}
          />
        );
      })}
    </ul>
  );
};
