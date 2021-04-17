//const express = require("express");



import express from 'express';

const router = express.Router();

//const Book=require('../models/book')
//request should be async so that it will not block our process
import Book from "../models/book";

//router to search by title
router.get("/", async (req: any, res: any) => {
  if (req.query.title) {
    try {
      const books = await Book.find({ title: req.query.title });
      res.json(books);
    } catch (err) {
      res.send("Error" + err);
    }
  } 

  //router to search by author
  else if (req.query.author) {
    try {
      const books = await Book.find({ author: req.query.author });
      res.json(books);
    } catch (err) {
      res.send("Error" + err);
    }
  } 
  //router to simple text search
  else if (req.query.q) {
    try {
      const books = await Book.find({
        $or: [{ title: req.query.q }, { author: req.query.q }],
      });
      res.json(books);
    } catch (err) {
      res.send("Error" + err);
    }
  } else if (req.query["price"]) {
   let array :any=req.query["price"];
    try {
      const books = await Book.find({
        $and: [
          { price: { $lte: array[1] } },
          { price: { $gte: array[0] } },
        ]
      });
      res.send(books);
    } catch (err) {
      res.send("Error" + err);
    }
  } else {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.send("Error" + err);
    }
  }
});



//router to get by id
router.get("/:id", async (req: any, res: any) => {
  try {
    //we are using params because we are sending id in url
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.send("Error" + err);
  }
});

//router for post request

router.post("/", async (req: any, res: any) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    rating: req.body.rating,
    //sub:req.body.sub
  });

  try {
    const a1 = await book.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//router for put
router.put("/:id", async (req: any, res: any) => {
  try {
    const book:any = await Book.findById(req.params.id);
    console.log(book);


    (book.title = req.body.title),
      (book.author = req.body.author),
      (book.price = req.body.price),
      (book.rating = req.body.rating);

    const a1 = await book.save();
    res.json(a1);
  } catch (err) {
    console.log(err);
    res.send("Error ");
  }
});

//router for delete
router.delete("/:id", async (req: any, res: any) => {
  try {
    const book:any = await Book.findById(req.params.id);
    // book.title=req.body.title
    const a1 = await book .remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

//we need to export router to access it in app.js
//module.exports=router

export default router;
