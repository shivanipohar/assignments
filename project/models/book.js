const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  cover: {
    type: String,
  },
  description: {
    type: String,
  },
})

module.exports=mongoose.model('Book',bookSchema);
