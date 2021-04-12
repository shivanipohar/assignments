// javascript for index.html
 const container = document.querySelector('.blogs');
 const searchForm = document.querySelector('.search');

const renderBooks = async (term) => {
  //console.log(term);
  let uri = ' http://localhost:3000/books?_sort=price';
  if (term) {
     uri += `&q=${term}`;
   }

  const res = await fetch(uri);
  const books = await res.json();
  console.log(books);


  
let template = '';
   books.forEach(book => {
   template += `
   

<a style="text-decoration:none" href="/details.html?id=${book.id}">
<div  class="book-card" id='${book.id}'>
  <br>
  <img src="${book.cover}" alt=${book.title}" style="width:20%">
  <h3>${book.title}</h3>
<p style="text-align:center">rating:${book.rating}</p>
<p class="price" style="color:black"><strong>${book.price}</strong></p>


</div>
</a>

`
  });

  container.innerHTML = template;
}
  // window.addEventListener('DOMContentLoaded', () => renderPosts());
// }

// // search
 searchForm.addEventListener('submit',  (e) => {
   e.preventDefault();
   renderBooks(searchForm.term.value.trim());
 })
window.addEventListener('DOMContentLoaded', () => renderBooks());
