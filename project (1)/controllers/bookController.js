const Book = require("../models/book");

async function getParticularBook(req, res, id) {
  try {
    //we are using params because we are sending id in url
    const book = await Book.findById(id);
    res.json(book);
  } catch (err) {
    res.send("Error" + err);
  }
}
async function getBooksByAuthor(req, res, author) {
  try {
    const books = await Book.find({ author: author });
    res.json(books);
  } catch (err) {
    res.send("Error" + err);
  }
}
async function getBooksAccToRating(req, res, Rating) {
  try {
    const book = await Book.find({ rating: { $gte: Rating } });
    res.json(book);
  } catch (err) {
    console.log(err);
    res.send("Error ");
  }
}
async function getBooksAccToSimpleSearch(req, res, search) {
  try {
    const books = await Book.find({
      $or: [{ title: req.query.q }, { author: req.query.q }],
    });
    res.json(books);
  } catch (err) {
    res.send("Error" + err);
  }
}
async function getBooksAccToPricerange(req, res, min, max) {
  // req.query["price"];
  //  let array = req.query["price"];
  try {
    const books = await Book.find({
      $and: [{ price: { $lte: max } }, { price: { $gte: min } }],
    });
    res.send(books);
  } catch (err) {
    res.send("Error" + err);
  }
}

async function deleteParticularBook(req, res, id) {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    // const a1 = await book.remove();

    res.json(book);
  } catch (err) {
    res.send("Error");
  }
}



async function putParticularBook(req, res,id) {
  try {
    var value=req.body;
    const book = await Book.findByIdAndUpdate(id,value,{new:true});

    // const a1 = await book.save();
    // res.json(a1);
    res.send(book);
  } catch (err) {
    console.log(err);
    res.send("Error ");
  }
}

module.exports = {
  getParticularBook,
  getBooksByAuthor,
  deleteParticularBook,
  getBooksAccToRating,
  getBooksAccToPricerange,
  getBooksAccToSimpleSearch,
  putParticularBook,
};
