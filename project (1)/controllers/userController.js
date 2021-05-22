const env = require("dotenv");
env.config();

const jwt = require("jsonwebtoken");
const users = require("../models/user");
const bcrypt = require("bcrypt");
const { request, response } = require("express");

async function finduserbyemail(email, res) {
  try {
    let usermail = await users.findOne({ email });
    if (usermail) return usermail;
    else return true;//no user is present we can register
  } catch (err) {
    res.send("error occured", err.message);
  }
}


async function checkauthorization(req,res,next){
    try{
        if(req.headers && req.headers.authorization){
            const token=req.headers.authorization
            //we need to verify token and store it in decode
            const decode=jwt.verify(token,`${process.env.JWT_SECRET}`)
            //we have id inside decode
            const user=await users.findById(decode.userId)
            try{
                if(!user){
                    return res.json({success:false,message:"unauthorizd access"})
                }
                //add user to request object
                req.user=user
                //call next function
                next()
                //if there is an error we need to handle
            }catch(error){
                if(error.name==='jsonwebtokenerror'){
                    return res.status(401).json({success:false,message:"unauthorizd access"})
                }//token expired error
                if(error.name==='tokenexpirederror'){
                    return res.json({success:false,message:"session expired"})
                }
                //general errors
                res.json({success:false,message:"couldnot sign in"})
            }
        }
    }
    catch(err){
        console.log("error in authentication",err.message)
    }
}




//to register a new user
async function registeruser(req,res){
    try{
        let useradded;
        console.log(req.body);
        let {name,password,email}=req.body;
        if((await finduserbyemail(email,res))===true){
            //if we get response as true we are adding new user
            let newuser=new users();
          await  bcrypt.hash(password,8,async (err,hash)=>{
                if(err){
                    console.log("error in hashing password",err.message);
                    return false;
                }
                //hashed password result will get stored in password
                password=hash;
                newuser={name,email,password};
                useradded=await users.create(newuser);
                res.writeHead(201,{"content-type":"application/json"});
                res.end(JSON.stringify(useradded));
            })
        }else{
            res.status(409).end("EMAIL ALREADY EXISTS TRY SIGN IN");
        }
    }catch(error){
        res.end(error.message);
    }
}
async function loginuser(req,res){
    try{
        let {email,password}=req.body;
        let user=await finduserbyemail(email,res);
        //email id exists
        if(user!==true){
            console.log(user);
            //compare passwords which we have entered and oassword in database
            let match=await bcrypt.compare(password,user.password);
            console.log(match);
            if(match){
                const token=jwt.sign({userId:user._id},`${process.env.JWT_SECRET}`,{expiresIn:'2d'})
                res.status(200).json({"token":token});
            }else{
                // res.end("incorrect password");
                return res.status(401).json({success:false,message:"Incorrect Password"})

            }
        }else{
            res.end("no user found")
        }
    }
    catch(error){
        console.log("error in login user",error)
    }
}


module.exports={registeruser,loginuser,checkauthorization}