// javascript for create.html
const form = document.querySelector('form');

const createBook = async (e) => {
  e.preventDefault();
  let genre= form.genere.value.split(',');
  const doc = {
    // title: form.title.value,
    // rating: form.rating.value,
    // price: form.price.value,


    isbn: form.isbn.value,
        title: form.title.value,
        author: form.author.value,
        pages: form.pages.value,
        price: form.price.value,
        rating: form.rating.value,
        votes: form.votes.value,
        description: form.description.value,
        tags: genre,
        series: form.series.value,
        seriesIndex: form.seriesIndex.value,
        releaseDate: form.date.value,
        cover: form.cover.value
    
  }
  console.log(doc);

  await fetch('http://localhost:3000/books', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  });

  window.location.replace('/index.html')
}

form.addEventListener('submit', createBook);
