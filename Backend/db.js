// here the data of teh database will be stored
const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/imb"
const connectToMongo = () =>{
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI,
        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        })
}
module.exports = connectToMongo;