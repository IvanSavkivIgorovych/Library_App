import React from "react";

import "./style.css";
import BOOK_LIST from "./store/books.json";
import { Books } from "./components/Books";

const App = () => {
  return (
    <div className="container">
      <Books books={BOOK_LIST} />
    </div>
  );
};

export default App;
