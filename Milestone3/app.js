"use strict";
//we need express
//const express=require("express")
//const mongoose=require('mongoose')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//require('dotenv').config();
//console.log(process.env.user);
// //express is connection to mongodb and mongo db connecting to database 
var url = "mongodb+srv://" + process.env.user + ":" + process.env.password + "@mern.25uw8.mongodb.net/bookmanagement?retryWrites=true&w=majority";
// //to start express framework
var app = express_1.default();
// //connect application with database
// //to avoid warnings we use newurlparser
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var con = mongoose_1.default.connection;
con.on('open', function () {
    console.log("connected");
});
app.use(express_1.default.json());
// //create a router
//const bookRouter=require('./routes/books')
var books_1 = __importDefault(require("./routes/books"));
// //add a middleware
app.use('/books', books_1.default);
app.listen(9000, function () {
    console.log('server started');
});
