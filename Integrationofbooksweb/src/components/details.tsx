import React, { Component } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { getBookById, deleteBook } from "../utils";
import { StarComponent } from "./table";

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

  fetch("http://localhost:8000/books/" + bookid)
    .then((result) => result.json())
    .then((data) => setbook(data))
    .catch((err) => console.log(err));

  const deletefunction = (id: any) => {
    console.log(id);
    fetch("http://localhost:8000/books/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
    }).then(() => history.push("/books"));
  };

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
            deletefunction(bookid);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}
