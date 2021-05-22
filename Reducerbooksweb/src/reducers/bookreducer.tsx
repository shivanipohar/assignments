//import uuid from 'uuid/v4';

export const bookReducer = (state: any, action: any) => {
 // console.log(state.users)
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(
          (book: any ) => book.id !== action.payload
        )
      };

      case "REGISTER_USER":
        return {
          
          ...state,
          users: [...state.users, action.payload]
        };
        case "LOGIN_USER":
          return{
            ...state,activeuser:action.payload};
          
    default:
      return state;
  }
};
