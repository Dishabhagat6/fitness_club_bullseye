import React from "react";
import BookCard from "./BookCard";

const BookList = (props) => {
  console.log(props);

  const deleteBookHandler = (id) => {
    props.getBookId(id);
  };
  const renderBookList = props.Books.map((Book) => {
    return (
      <BookCard
        Book={Book}
        clickHander={deleteBookHandler}
        key={Book.id}
      />
    );
  });
  return <div className="ui celled list">{renderBookList}</div>;
};

export default BookList;