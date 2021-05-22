import axios from "axios";
import React, { Component } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../contexts/bookcontext";
import { deletefunction } from "../services";
import { getBookById, deleteBook } from "../utils";
import { StarComponent } from "./table";

interface Props {
  bookid: number;
}

export default function Details({ bookid }: Props) {
  let history = useHistory();
  const params:any=useParams()
  console.log(params.id)
  console.log(bookid)
  
  const [Flag, setFlag] = useState(false);
 

  const [book, setbook] = useState<any>({});

  const { state, dispatch } = useContext(UserContext);
  console.log(state.books);
  useEffect(() => {
    var i;
    for (i = 0; i < state.books.length; i++) {

      if (state.books[i]._id == params.id || state.books[i]._id == bookid) setbook(state.books[i]);
    }
  }, []);

  // fetch("http://localhost:8000/books/" + bookid)
  //   .then((result) => result.json())
  //   .then((data) => setbook(data))
  //   .catch((err) => console.log(err));

  // axios.get('http://localhost:8000/books/'+bookid)
  //   .then((result) => result.data)
  //   .then((data) => setbook(data))
  //   .catch((err) => console.log(err));

  //   fetch("http://localhost:8000/books/" + id, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `${localStorage.getItem("token")}`,
  //     },
  //   }).then(() => history.push("/books"));
  // };

  //  axios.delete("http://localhost:8000/books/"+id, {
  
  //   }).then(() => history.push("/books"));
  // };
  
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
            deletefunction(book._id,state);
            dispatch({ type: "REMOVE_BOOK", payload: book._id });
            history.push("/books");
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
