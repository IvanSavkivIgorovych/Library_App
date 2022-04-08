import React, { useState } from "react";

import "./style.css";
import BOOK_LIST from "./store/books.json";
import { Books } from "./components/Books";

const App = () => {
  const [bookList, setBookList] = useState(BOOK_LIST);

  const removeBook = (id) => {
    setBookList(bookList.filter((book) => book.id !== id));
  };

  return (
    <div className="container">
      <Books data={bookList} onRemoveBook={removeBook} />
    </div>
  );
};

export default App;
