import React from "react";

class AddBook extends React.Component {
  state = {
    Bookname: "",
    Title: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.Bookname === "" || this.state.Title === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addBookHandler(this.state);
    this.setState({ Bookname: "", Title: "" });
  };
  render() {
    return (
      <div className="ui main" >
        <h2>Add Book</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Book Name</label>
            <input
              type="text"
              Bookname="Bookname"
              placeholder="Name"
              value={this.state.Bookname}
              onChange={(e) => this.setState({ Bookname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              Bookname="Title"
              placeholder="Title"
              value={this.state.Title}
              onChange={(e) => this.setState({ Title: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;