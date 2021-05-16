const mongoose = require("mongoose");

module.exports=mongoose

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db is connected');
  })

  
  .catch((err) => console.log(err.message));