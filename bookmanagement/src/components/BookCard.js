import React from "react";
import book from "../images/book.png";

const BookCard = (props) => {
  const { id, Bookname, Title } = props.Book;
  return (
    <div className="item">
      <img className="ui avatar image" src={book} alt="book" />
      <div className="content">
        <div className="header">{Bookname}</div>
        <div>{Title}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default BookCard;