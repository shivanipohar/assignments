import express from "express"
//console.log(express);

const app=express()
app.get('/' ,(req,res) =>{
    res.send('Hello world')
})
app.listen(5000)