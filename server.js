const express = require("express");
const app = express();

const PORT = process.env.PORT || 7000;

app.get('/',(req,res)=>res.send("Hey, I am the server"))

app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})