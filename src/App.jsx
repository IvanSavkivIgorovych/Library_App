import React, { useState } from "react";

import "./style.css";
import BOOK_LIST from "./store/books.json";
import { Books } from "./components/Books";

const App = () => {
  const [bookList, setBookList] = useState(BOOK_LIST);

  const removeBook = (id) => {
    setBookList((prev) => prev.filter((book) => book.id !== id));
  };

  const onReadBook = (id) => {
    const idx = bookList.findIndex((item) => item.id === id);

    setBookList((prev) => [
      ...prev.slice(0, idx),
      { ...prev[idx], isRead: !prev[idx].isRead },
      ...prev.slice(idx + 1),
    ]);
  };

  return (
    <div className="container">
      <Books
        data={bookList}
        onRemoveBook={removeBook}
        onReadBook={onReadBook}
      />
    </div>
  );
};

export default App;
