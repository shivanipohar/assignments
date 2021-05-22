import React from "react";
import axios from "axios";
import Details from "./details";
import { fetchFromLocalStorage, searchBooks } from "../utils";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FunctionComponent } from "react";
import { useEffect } from "react";
import { UserContext } from "../contexts/bookcontext";
import { useContext } from "react";
import { getBooks, getSearchDetails } from "../services";
import Corousal from './corousal';

export interface StarProps {
  rating?: any;
  minimumof: number;
  outof: number;
}
export const StarComponent: FunctionComponent<StarProps> = ({
  rating,
  minimumof,
  outof,
}) => {
  let finalRating =
    ((+rating - +minimumof) * (5 - 1)) / (+outof - +minimumof) + 1;

  let calRating = Math.floor(finalRating);
  let stars = [];
  for (let i = 0; i < calRating; i++) {
    stars.push(<i key={i} className="fa fa-star"></i>);
  }
  if (+finalRating % 1) {
    stars.push(<i key={"final"} className="fa fa-star-half"></i>);
  }
  return <div>{stars}</div>;
};

interface Props {
  handleClick: Function;
}
interface Props {}

export default function Table({ handleClick }: Props) {
  const { state, dispatch } = useContext(UserContext);

  const [SearchData, setSearchData] = useState("");
  const [choice, setChoice] = useState("");
  //const [Books, setBooks] = useState<any>([]);
  const [Books, setBooks] = useState<any>(state.books);
  useEffect(() => {
    getBooks(dispatch);
  }, []);

  useEffect(() => {
    console.log(state.books,"hello");
    console.log("hi");
     if (SearchData === "") 
    setBooks(state.books);
  });

  const getdropdownvalue = (e: any) => {
    setChoice(e.target.value);
  };
  const inputEvent = (e: any) => {
    setSearchData(e.target.value);
  };

  const  searchDetails =async () => {
    let books = await getSearchDetails(SearchData, choice);
    console.log(books);
    setBooks(books);
  };
  //  const getSearchDetails = () => {
  //   let books = searchBooks(SearchData, choice);
   
  // };

  return (
    <>
      <form id="searchname" className="inlinesearchform">
        <select onClick={getdropdownvalue} className="dropdown">
          <option value="" selected disabled>
            select type of search
          </option>

          <option value="id">id</option>
          <option value="title">title</option>
          <option value="author">author</option>
          <option value="rating">rating</option>
          <option value="price">price</option>
        </select>
        &nbsp;
        <input
          type="search"
          onChange={inputEvent}
          className="searchbar"
        ></input>
        <button
          className="searchbutton"
          type="button"
          //after clicking button goes to searchdata
           //onClick={() => getSearchDetails(SearchData, choice)}
        onClick={() => searchDetails()}
        >
          search
        </button>
        <Corousal/>
      </form>
      {console.log(Books.length)}
      {Books?.length !== 1 ? (
        Books?.map((book: any) => {
         
          return (
            <Link to={"/book/"+book._id}>
              <div
                className="color for div"
                onClick={() => handleClick(book.id)}
              >
                <div className="book-card">
                  <br />
                  <img src={book.cover} id="img" alt={book.title} />
                  <h5>{book.title}</h5>

                  <p>{book.author}</p>
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
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <Details bookid={Books[0]._id}></Details>
      )}
    </>
  );
}
