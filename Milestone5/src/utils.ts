
function fetchFromLocalStorage() {
  let backBooks: any[] = [];
  if (typeof Storage != "undefined") {
    let stringBooks = localStorage.getItem("books");
   
    if (stringBooks) {
     
      backBooks = JSON.parse(stringBooks);
      console.log(backBooks);
     
      return backBooks;
    }
    else {
      console.log("books not found");
      return [];
    }
  } else {
    console.log("not supported");
    return [];
  }
  console.log(typeof backBooks);
  return backBooks;
}

function addBookToStorage(book:any) {
  //get books from local storage
    let books=fetchFromLocalStorage();
    if(books){
      //if there are books push new book into local storage
        books.push(book);
      //  converts value into a JSON string
        let stringBooks=JSON.stringify(books);
        //send book back to local storage
        localStorage.setItem("books",stringBooks);

    }else{
        let array=[];
        //if there is an empty array then we push book
        array.push(book);
        localStorage.setItem("books",JSON.stringify(array));
    }
}

function getBookById(id:number){
  let books:any=fetchFromLocalStorage()
  return books.find((book:any)=>id===book.id)
}

function deleteBook(id:number){
  let books=fetchFromLocalStorage()
  if(books){
    for(let i=0;i<books.length;i++){
      if(books[i].id===id){
        books.splice(i,1);
        break;
      }
    }
    localStorage.setItem("books",JSON.stringify(books));
  }
  return 1;
}


function searchBooks(searchText:string,choice:string,data:any)
//function searchBooks(searchText:string,choice:string)
{
  let books:any=data
 //let books:any
  switch(choice){
    //find function works on array each and everytime it will check whethet user enetred value is equal to id or not
    case "id":return [books.find((book:any)=>searchText===book.id.toString())]
    case "title":
      //choice can be either author or title,if indexOf is not equal to -1 then we get book
    case "author":return books.filter((book:any)=>book[choice]?.toLowerCase().indexOf(searchText?.toLowerCase())!==-1)
    case "price":let[minimum,maximum]=searchText.split(" ");
    return books.filter((book:any)=>book.price>=Number(minimum)&&book.price<=Number(maximum));
    case "rating":return books.filter((book:any)=>book.rating>=Number(searchText))
  }
}
export { fetchFromLocalStorage, addBookToStorage,getBookById,deleteBook ,searchBooks};


