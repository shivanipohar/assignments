export const bookReducer = (state: any, action: any) => {
  // console.log(state.users)
  // Do something here based on the different types of actions
  switch (action.type) {
    
    case "GET_BOOKS":
      return {
         // that has all the existing state data
        ...state,
        books: action.payload,
      };
    case "ADD_BOOK":
      console.log("abc");
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book: any) => book._id !== action.payload),
      };

    // case "REGISTER_USER":
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload],
    //   };
    case "LOGIN_USER":
      return {
        ...state,
        activeuser: action.payload,
      };
    case "USER_TOKEN":
      return{
        ...state,
        token:action.payload
      }
    default:
      return state;
  }
};
