//we need express
//const express=require("express")
//const mongoose=require('mongoose')

import express from 'express';

 import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

//require('dotenv').config();

//console.log(process.env.user);


// //express is connection to mongodb and mongo db connecting to database 
 const url = `mongodb+srv://${process.env.user}:${process.env.password}@mern.25uw8.mongodb.net/bookmanagement?retryWrites=true&w=majority`

// //to start express framework
 const app=express()

// //connect application with database
// //to avoid warnings we use newurlparser
 mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})
const con=mongoose.connection

 con.on('open',() =>{
     console.log("connected");
 })

 app.use(express.json())

// //create a router
//const bookRouter=require('./routes/books')
 import bookRouter from './routes/books';

// //add a middleware
 app.use('/books',bookRouter)


app.listen(9000, () =>{
    console.log('server started')
})