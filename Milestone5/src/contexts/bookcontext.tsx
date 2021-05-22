import React, { useReducer } from "react";
import { bookReducer } from "../reducers/bookreducer";
//creating context
const UserContext = React.createContext<any>({});

interface Props {
  children?: any;
}
const BookContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(bookReducer, {}, () => {
    return {
      books: [],
       activeuser: null,
      booksSelected: [],
      token:null
    };
  });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { BookContextProvider, UserContext };
