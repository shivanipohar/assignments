import React, { Component } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import { getBookById, deleteBook } from "../utils";
import { StarComponent } from "./showlist";

interface Props {
  bookid: number;
}




export default function Details({ bookid }: Props) {
  let history = useHistory();
  const [Flag, setFlag] = useState(false);
  // let book:any;
  //console.log(bookid);
  // console.log("hi");
  // let book: any = getBookById(bookid);

  const [book, setbook] = useState<any>({});
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    
  var i;
  for(i=0;i<state.books.length;i++){
    if(state.books[i].id==bookid)
    setbook(state.books[i])
  }
},[])

  // fetch("http://localhost:8000/books/" + bookid)
  //   .then((result) => result.json())
  //   .then((data) => setbook(data))
  //   .catch((err) => console.log(err));

  // const deletefunction = (id: any) => {

    
   
  //   console.log(state.books);
  //   history.push("/books");
  
    // console.log(id);
  //   fetch("http://localhost:8000/books/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `${localStorage.getItem("token")}`,
  //     },
  //   }).then(() => history.push("/books"));
   //};

  return (
    <div>
      <div className="card">
        <br />
        <img src={book.cover} id="cardimg" alt={book.title} />
        <h3>{book.title}</h3>
        {/* <p >Rating:{book.rating}</p> */}
        <p>
          <strong>{book.author}</strong>
        </p>
        <p className="price">
          <strong>{book.price}</strong>
        </p>
        {/* <p>Rating:{book.rating}</p> */}
        <div className="star">
          <span>
            <StarComponent
              rating={book.rating}
              outof={5}
              minimumof={1}
            ></StarComponent>
          </span>
        </div>

        <p>
          <strong>Description:{book.description}</strong>
        </p>

        <button
          type="submit"
          className="deletebutton"
          onClick={() => {
            // deletefunction(bookid);
            dispatch({type:"REMOVE_BOOK",payload:bookid})
            history.push("/books");
  
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
