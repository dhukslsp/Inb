// here the data of teh database will be stored
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://dhruv:mypwd@cluster0.uu8x4j9.mongodb.net/clust"
const connectToMongo = () =>{
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI,
        (err) => {
         if(err) console.log(err) 
         else console.log("mongdb is connected");
        })
}
module.exports = connectToMongo;