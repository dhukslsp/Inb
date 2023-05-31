// Index is the main route of the file
const express = require('express');
const connectToMongo = require("./db");
const cors = require("cors");
const path = require("path")
connectToMongo();
const app = express()
const port = process.env.PORT || 5050;
//available eutes

app.use(express.static("build"));
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send("hello world")
  
});
app.get('/test',(req,res)=>{
  res.send("Working correctly");
})
app.use("/api/auth",require("./Routes/auth"));
app.use("/api/notes",require("./Routes/notes"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});