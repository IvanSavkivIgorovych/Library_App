import React, { useState } from "react";

import "./style.css";
import BOOK_LIST from "./store/books.json";
import { Books } from "./components/Books";
import { AddForm } from "./components/AddForm";
import { StatisticsBoard } from "./components/StatisticsBoard";

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

  const onAddNewBook = (book) => {
    setBookList((prev) => [...prev, { ...book, id: bookList.length + 1 }]);
  };

  const statisticsData = {
    all: bookList.length,
    readBooks: bookList.filter((book) => book.isRead).length,
    notReadBooks: bookList.filter((book) => !book.isRead).length,
  };

  return (
    <div className="container">
      <AddForm onAddNewBook={onAddNewBook} />
      <StatisticsBoard
        {...statisticsData}
        onRemoveAll={() => setBookList([])}
      />
      <Books
        data={bookList}
        onRemoveBook={removeBook}
        onReadBook={onReadBook}
      />
    </div>
  );
};

export default App;
