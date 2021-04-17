"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const mongoose=require('mongoose')
//import mongoose from 'mongoose'
var mongoose_1 = __importDefault(require("mongoose"));
var bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    price: {
        type: String
    },
    rating: {
        type: String
    }
    // sub:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // }
});
var schema = mongoose_1.default.model('Book', bookSchema);
exports.default = schema;
