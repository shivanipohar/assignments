//const mongoose=require('mongoose')
//import mongoose from 'mongoose'
import mongoose from 'mongoose';
const bookSchema=new mongoose.Schema({
        title:{
            type:String,
           
        },
        author:{
            type:String,
           
        },
        price:{
            type:String
        },

        rating:{
            type:String
        }
        // sub:{
        //     type:Boolean,
        //     required:true,
        //     default:false
        // }
    }
)

let schema=mongoose.model('Book',bookSchema)
export default schema

