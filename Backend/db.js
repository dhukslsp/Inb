// here the data of teh database will be stored
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Inb"
const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongoose sucessfully");
    })
}
module.exports = connectToMongo;