import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddBook from "./AddBook";
import BookList from "./BookList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [Books, setBooks] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addBookHandler = (Book) => {
    console.log(Book);
    setBooks([...Books, { id: uuid(), ...Book }]);
  };

  const removeBookHandler = (id) => {
    const newBookList = Books.filter((Book) => {
      return Book.id !== id;
    });

    setBooks(newBookList);
  };



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Books));
  }, [Books]);

  return (
    <div className="ui container" >
      <Header />
      <AddBook addBookHandler={addBookHandler} />
      <BookList Books={Books} getBookId={removeBookHandler} />
    </div>
  );
}

export default App;