const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();

require("./models/db");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH");
  next();
});

const route = require("./routes");

const Book = require("./models/book");

// const users=require("./models/user")
const { json } = require("express");


app.use(express.json());
app.use(cors());
app.use("/", route);

app.listen(8000, () => {
  console.log("port is listening");
});
