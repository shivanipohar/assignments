import React, { Component } from "react";
import Header from "./components/header";
import NewHeader from "./components/newheader";
import LHeader from "./components/lheader";
import RegistrationForm from "./components/registrationform";
import LoginForm from "./components/loginform";
import Table from "./components/table";
import "./App.css";
import Addbook from "./components/addbook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchFromLocalStorage } from "./utils";
import Details from "./components/details";
import { useState } from "react";
import { useEffect } from "react";
import { BookContextProvider } from "./contexts/bookcontext";


interface Props {}

export default function App({}: Props) {
  const [token, setToken] = useState<any>(false)
  const [bookid, setbookid] = useState(0)
  const handleBook = (id: any) => {
    setbookid(id);
  };

  const handleToken = (token: string) => {
    setToken(token)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setToken(token)
    } else setToken(false)
  });
  return (
    <div>
      <Router>
        <Header></Header>
      
        {/* <NewHeader></NewHeader> */}

        <switch>
          <BookContextProvider>
          {/* <Route path="/newheader"><NewHeader></NewHeader></Route> */}


         

          <Route exact path="/register">
            <RegistrationForm />
          </Route>
          {/* <Route path="/lheader"><LHeader></LHeader></Route> */}
          <Route exact path="/login">
            <LoginForm handleToken={handleToken} />
          </Route>
          <Route path="/addbooks">
            {" "}
            <Addbook></Addbook>
          </Route>

          <Route exact path="/books">
            <Table handleClick={handleBook} />
          </Route>
          <Route exact path="/book/:id">
            <Details bookid={bookid}></Details>
          </Route>
          </BookContextProvider>
        </switch>
      </Router>
    </div>
  );
}
