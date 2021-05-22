import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import { fetchFromLocalStorage, addBookToStorage } from "../utils";
import axios from "axios";

import React, { useContext, useState } from "react";

interface Props {}

export default function Addbook({}: Props) {
  let history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [Book, setBook] = useState({
    Cover: "",
    Title: "",
    Author: "",
    Rating: 0,
    Price: "",
    Description: "",
  });

  const inputEvent = (event: any) => {
    //if we type anything then it will get catch as a event
    //names we have given for every thing like title,author,rating,price
    let nam = event.target.name;
    //the value what we enter
    let val = event.target.value;
    //then set that to value
    setBook({ ...Book, [nam]: val });
  };
// console.log(state.activeuser.token)
  const submitformdetails = (e: any) => {
    // let bookid = state.books[state.books.length - 1].id + 1;
    // let newbook = { ...Book, id: bookid };
    e.preventDefault()
    console.log(state.activeuser.token);
    axios.post("http://localhost:8000/addbooks", Book,{ headers: {

      authorization: `${state.activeuser.token}`,

    }})
    .then(()=> dispatch({ type: "ADD_BOOK", payload: Book }))
   

    // dispatch({ type: "ADD_BOOK", payload: Book });

    history.push("/books");
  };

  return (
    <>
      {/* input fields */}
      <h2 className="title">Add New Book</h2>
      <div className="form">
        <form onSubmit={submitformdetails} className="addbookform">
          
          <div className="form-group">
            <label htmlFor="cover">COVER:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="cover"
              onChange={inputEvent}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="title">TITLE:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={inputEvent}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="author">AUTHOR:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="author"
              onChange={inputEvent}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">DESCRIPTION:</label>
            <br></br>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={inputEvent}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="rating">RATING:</label>
            <br></br>
            <input
              step="0.01"
              type="number"
              className="formcontrol"
              name="rating"
              onChange={inputEvent}
            ></input>
          </div>

          <div className="col">
            <label htmlFor="price">PRICE:</label>
            <br></br>
            <input
              type="number"
              className="formcontrol"
              name="price"
              onChange={inputEvent}
            ></input>
          </div>

          <div className="submitform">
            <button type="submit" className="button">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
