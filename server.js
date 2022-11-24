const express = require("express");
const app = express();
const cors = require("cors")

const PORT = process.env.PORT || 7000;

app.use(cors())

app.get('/api',(req,res)=>{
    res.send("Hey I am the server")
 }
)

app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})