// here the data of teh database will be stored
const mongoose = require("mongoose");
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
const connectToMongo = () =>{
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI,
        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        })
}
module.exports = connectToMongo;