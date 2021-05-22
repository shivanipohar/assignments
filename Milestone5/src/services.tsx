import axios from "axios";
async function getBooks(dispatch: any) {
  let res = await axios.get("http://localhost:8000/books");
  console.log(res.data);
  dispatch({ type: "GET_BOOKS", payload: res.data });
}
const getSearchDetails = async (searchText: string, choice: string) => {
  let books: any = [];
  if (searchText === "") {
    books = await axios.get("http://localhost:8000/books");
  } else {
    switch (choice) {
      case "id":
        console.log(searchText);

        books = await axios.get("http://localhost:8000/books/" + searchText);

        console.log(books.data);
        books = [books.data];
        console.log(books);
        return books;

        break;

      case "author":
        books = await axios.get("http://localhost:8000/books/by/" + searchText);
        console.log(books.data);
        return books.data;
        break;
      case "rating":
        books = await axios.get(
          "http://localhost:8000/books/with-min-rating/" + searchText
        );
        return books.data;
        break;
      case "price":
        const [minPrice, maxPrice] = searchText.split("-");

        books = await axios.get(
          "http://localhost:8000/books/price/" + minPrice + "/" + maxPrice
        );
        return books.data;
        break;
      default:
        break;
    }
  }
};

const deletefunction = (_id: any, state: any) => {
  
  axios.delete("http://localhost:8000/books/" + _id, {
    headers: {
      authorization: `${state.activeuser.token}`,
    },
  });
};

const requestingForOTP=async(user:any,dispatch:any)=>{
  const res=await axios.post("http://localhost:8000/users/send",{phone:"+91"+user.phone});
  if(res.status===200){
    let tokenobject:any=res.data;
    console.log(tokenobject);
    dispatch({
      type:"USER_TOKEN",
      payload:tokenobject.token,
    });
  }
      else
      console.log(res.data);
    
}

const loginUser=async(user:any,dispatch:Function,token:any)=>{
  const res=await axios.post("http://localhost:8000/users/check",{otp:user.otp,token:token});
  if(res.status===200){
    let tokenobject:any=res.data;
    console.log(tokenobject);
    dispatch({
      type:"LOGIN_USER",
      payload:{token:tokenobject.token},
    });
  }
      else
      console.log(res.data);
    
}


export { getBooks, getSearchDetails, deletefunction,requestingForOTP,loginUser };
