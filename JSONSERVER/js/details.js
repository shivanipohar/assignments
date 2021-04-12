// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
 const deleteBtn = document.querySelector('.delete');
 console.log(deleteBtn);

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/books/' + id);
//   if (!res.ok) {
//     window.location.replace("/");
//   }
  const book = await res.json();
  console.log(book);


  const template = `
  <div class="card">
    <img src="${book.cover}" alt=${book.title}" style="width:20%">
    <p><strong>Author:${book.author}</strong></p>
    <p><strong>Rating:${book.rating}</strong></p>
    <p><strong>Series:${book.series}</strong></p>
    

    <p><strong>Genre:${book.tags}</strong></p>
    <p><strong>Price:${book.price}</strong></p>

    <h1>${book.title}</h1>
    <br>
    <p style="text-align:justify">${book.description}</p>
    </div>
  `

  container.innerHTML = template;
}

 deleteBtn.addEventListener('click', async (e) => {
   const res = await fetch('http://localhost:3000/books/' + id, {
     method: 'DELETE'
   });
   window.location.replace("/index.html");
 });

window.addEventListener('DOMContentLoaded', ()=>renderDetails());