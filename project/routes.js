const { Router } = require("express");
const express = require("express");

let route = express.Router();
require("./models/db");
const Book = require("./models/book");
//  const users=require("./models/user");
const {
  registeruser,
  loginuser,
  checkauthorization,
  sendOTP,
  checkOTP
} = require("./controllers/userController");
const {
  getParticularBook,
  getBooksByAuthor,
  deleteParticularBook,
  getBooksAccToRating,
  getBooksAccToPricerange,
  getBooksAccToSimpleSearch,
  putParticularBook
} = require("./controllers/bookController");

route.post("/addbooks", checkauthorization,async (req, res) => {
  const book = await Book(req.body);

  res.json(book);
  await book.save();
});

route.get("/books", async (req, res) => {
  const book = await Book.find();
  // console.log(book);
  res.send(book);
});

//search by author
route.get("/books/by/:author", (req, res) => {
  let authorname = "" + req.params.author;
  getBooksByAuthor(req, res, authorname);
});
//price range
route.get("/books/price/:min/:max", (req, res) => {
  let min = req.params.min;
  let max = req.params.max;
  getBooksAccToPricerange(req, res, min, max);
});
//rating
route.get("/books/with-min-rating/:rating", (req, res) => {
  let rating = req.params.rating;
  getBooksAccToRating(req, res, rating);
});
route.get("/books/matching", (req, res) => {
  let search = "" + req.query.q;
  getBooksAccToSimpleSearch(req, res, search);
});

route
  .route("/books")
  .get((req, res) => {
    getAllBooks(req, res);
  })
  .post( (req, res) => {
    console.log("secret way");
    postBook(req, res);
  });
route
  .route("/books/:id")
  .get((req, res) => {
    getParticularBook(req, res, req.params.id);
  })
  .patch(checkauthorization, (req, res) => {
    patchParticularBook(req, res, req.params.id);
  })
  .put(checkauthorization, (req, res) => {
    putParticularBook(req, res, req.params.id);
  })
  .delete(checkauthorization, (req, res) => {
    deleteParticularBook(req, res, req.params.id);
  });

route.post("/users/register", (req, res) => {
  registeruser(req, res);
});

route.post("/users/login", (req, res) => {
  loginuser(req, res);
});

route.post("/users/send", (req, res) => {
  sendOTP(req, res);
});

route.post("/users/check", (req, res) => {
  checkOTP(req, res);
});
module.exports = route;
