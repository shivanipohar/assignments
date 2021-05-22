const env = require("dotenv");
env.config();

const jwt = require("jsonwebtoken");
const users = require("../models/user");
const otps = require("../models/otp");
const twilio = require("twilio");
const bcrypt = require("bcrypt");
const { request, response } = require("express");

async function finduserbyemail(email, res) {
  try {
    let usermail = await users.findOne({ email });
    if (usermail) return usermail;
    else return true; //no user is present we can register
  } catch (err) {
    res.send("error occured", err.message);
  }
}

// async function checkauthorization(req,res,next){
//     try{
//         if(req.headers && req.headers.authorization){
//             const token=req.headers.authorization
//             const decode=jwt.verify(token,`${process.env.JWT_SECRET}`)
//             const user=await users.findById(decode.userId)

//         }
//     }
//     catch(err){

//     }
// }

async function checkauthorization(req, res, next) {
  try {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization;
      //we need to verify token and store it in decode
      const decode = jwt.verify(token, `${process.env.JWT_SECRET}`);
      //we have id inside decode
      const user = await users.findById(decode.userId);
      try {
        if (!user) {
          return res.json({ success: false, message: "unauthorizd access" });
        }
        //add user to request object
        req.user = user;
        //call next function
        next();
        //if there is an error we need to handle
      } catch (error) {
        if (error.name === "jsonwebtokenerror") {
          return res
            .status(401)
            .json({ success: false, message: "unauthorizd access" });
        } //token expired error
        if (error.name === "tokenexpirederror") {
          return res.json({ success: false, message: "session expired" });
        }
        //general errors
        res.json({ success: false, message: "couldnot sign in" });
      }
    }
  } catch (err) {
    console.log("error in authentication", err.message);
  }
}

//to register a new user
async function registeruser(req, res) {
  try {
    let useradded;
    console.log(req.body);
    let { name, password, email, phone } = req.body;
    if ((await finduserbyemail(email, res)) === true) {
      //if we get response as true we are adding new user
      let newuser = new users();
      await bcrypt.hash(password, 8, async (err, hash) => {
        if (err) {
          console.log("error in hashing password", err.message);
          return false;
        }
        //hashed password result will get stored in password
        password = hash;
        newuser = { name, email, password, phone };
        useradded = await users.create(newuser);
        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify(useradded));
      });
    } else {
      res.status(409).end("EMAIL ALREADY EXISTS TRY SIGN IN");
    }
  } catch (error) {
    res.end(error.message);
  }
}
async function loginuser(req, res) {
  try {
    let { email, password } = req.body;
    let user = await finduserbyemail(email, res);
    //email id exists
    if (user !== true) {
      console.log(user);
      //compare passwords which we have entered and oassword in database
      let match = await bcrypt.compare(password, user.password);
      console.log(match);
      if (match) {
        const token = jwt.sign(
          { userId: user._id },
          `${process.env.JWT_SECRET}`,
          { expiresIn: "2d" }
        );
        res.status(200).json({ token: token });
      } else {
        // res.end("incorrect password");
        return res
          .status(401)
          .json({ success: false, message: "Incorrect Password" });
      }
    } else {
      res.end("no user found");
    }
  } catch (error) {
    console.log("error in login user", error);
  }
}

// async function sendOTP(request,response){
//     //to access variables
//     const accountSID=process.env.TWILLIO_ACCOUNT_SID;
//     const authToken=process.env.TWILLIO_AUTH_TOKEN;
//     const client = require('twilio')(accountSID, authToken);

//     const phone=request.body.phone;
//     let userDetails=await userWithPhone(phone)
//     if(userDetails){
//   //  random number
//         const otp=Math.floor(100000+Math.random()*900000);

//         const ttl=5*60*1000;
//         const expires=Date.now()+ttl;
//         const userData=`${phone}.${expires}.${userDetails._id}`
//         // const userData=`${phone}`
//         const message=`Welcome To BookWebApp Your OTP For Login Is ${otp}`

//         client.messages.create({
//             body:message,
//             from:'+19724357160',
//             to:phone
//         })
//         .then(async(message)=>{
//             let userOTPInformation={phone,otp}
//             userOTPInformation=await OTPInformation.create(userOTPInformation)
//             response.status(201).send({success:true,message:`OTP has generated and send to your phone`,userData})
//         })
//         .catch((err)=>{
//             response.status(403).send({success:false,message:`Sorry for the inconvenience please try again`})

//         })
//         // .then((messages)=>console.log(messages)).catch((err)=>console.error(err))
//         // response.status(200).send({phone})
//     }
//     else{
//         response.status(404).send({success:false,message:`Please do register before login`})
//     }

//  }

async function sendOTP(request, response) {
  try {
    let { phone } = request.body;
    let user = await users.findOne({ phone });
    if (user) {
      //to create a twillio client
      const accountSID = process.env.TWILLIO_ACCOUNT_SID;
      const authToken = process.env.TWILLIO_AUTH_TOKEN;
      const client = require("twilio")(accountSID, authToken);
      //generating a random number
      const randomno = Math.floor(100000 + Math.random() * 900000);

      client.messages
        .create({
          body: `${randomno}`,
          from: "+19724357160",
          to: phone,
        })

        .then(async (message) => {
          const token = jwt.sign(
            { phone: phone, otp: randomno, userId: user._id },
            `${process.env.JWT_SECRET}`,
            { expiresIn: "17m" }
          );
          //console.log(token);
          //otp schema to send token and no in db
          let otpofuser = new otps();
          otpofuser = {
            token: token,
            phone: phone,
          };
          // console.log(otpofuser);
          const result = await otps.create(otpofuser);
          response.json({ token: token });
        })

        .catch((err) => {
          response.status(403).send({
            success: false,
            message: `Sorry for the inconvenience please try again`,
          });
        });
    } else {
      response.send({
        success: false,
        message: `Please do register before login`,
      });
    }
  } catch (err) {
    console.log("error");
  }
}

// async function checkOTP(request,response){
//     const otp=parseInt(request.body.otp);
//     const expiry=parseInt(request.body.userData.split('-')[1])

// try{
//     const phone=request.body.userData.split('-')[0]
//     let databaseUserdata=await OTPInformation.findOne({phone})
//checking otp
//     if(databaseUserdata.otp==otp){
//         const userId=request.body.userData.split('-')[2]
//         await OTPInformation.findByIdAndDelete({_id:databaseUserdata._id})
//         const token=jwt.sign({userId:user._id},`${process.env.JWT_SECRET}`,{expiresIn:'2d'})
//         return response.status(200).send({success:true,message:'OTP Successfully verified',token})
//     }
//     else{
//         await OTPInformation.findByIdAndDelete({_id:databaseUserdata._id})
//         return response.status(404).send({success:false,message:'Wrong OTP,please try again'})
//     }
// }
// catch(err){
//     return response.status(404).send({success:false,message:'something went wrong'})
// }
// }

async function checkOTP(request, response) {
  try {
    const { token, otp } = request.body;

    jwt.verify(token, `${process.env.JWT_SECRET}`, async (err, data) => {
      if (err) {
        response.status(404).send("sorry unable to login");
      }

      if (data.otp == otp) {
        const dbuserdata = await otps.findOne({ phone: data.phone });
        if (dbuserdata && dbuserdata.token == token) {
          const gentoken = jwt.sign(
            { userId: data.userId },
            `${process.env.JWT_SECRET}`,
            { expiresIn: "2d" }
          );

          await otps.findByIdAndDelete(dbuserdata._id);
          response.status(200).json({ token: gentoken });
        } else {
          response
            .status(404)
            .send({ success: false, message: "invalid user" });
        }
      } else {
        response.status(404).send({ success: false, message: "wrong otp" });
      }
    });
  } catch (err) {
    return response
      .status(404)
      .send({ success: false, message: "something went wrong" });
  }
}

//module.exports={registeruser,loginuser,checkauthorization}

module.exports = {
  registeruser,
  loginuser,
  checkauthorization,
  sendOTP,
  checkOTP,
};
