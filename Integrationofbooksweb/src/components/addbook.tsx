import React, { Component } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { fetchFromLocalStorage, addBookToStorage } from "../utils";

interface Props {}

export default  function Addbook({}: Props) {
  let history = useHistory();
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

  const submitformdetails = (e: any) => {
    
    fetch('http://localhost:8000/addbooks', {
    method: 'POST',
    body: JSON.stringify(Book),
    headers: { 'Content-Type': 'application/json', authorization: `${localStorage.getItem("token")}` }
    
  });
  history.push("/books");
  }
  
  // const deletefunction = (id: any) => {
  //   console.log(id);
  //   fetch("http://localhost:8000/books/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `${localStorage.getItem("token")}`,
  //     },
  //   }).then(() => history.push("/books"));
  // };
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

          {/* <div className="form-row">
            <div className="col"> */}
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
          {/* </div> */}
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
