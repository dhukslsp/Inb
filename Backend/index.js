// Index is the main route of the file
const express = require('express');
const connectToMongo = require("./db");
const cors = require("cors");
connectToMongo();
const app = express()
const port = 3012
//available eutes


app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
  
});
app.use("/api/auth",require("./Routes/auth"));
app.use("/api/notes",require("./Routes/notes"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});