const express = require("express");
const app = express();
const server = require("http").createServer(app)
const io = require("socket.io")(5001, {
    cors:{
        origin:"http://localhost:5000",
        method:["GET","POST"]
    }
})
const { getAllPosts, addPost } = require("./controller/post");
const cors = require("cors");
const { default: mongoose } = require("mongoose");


io.on("connection", async(socket)=>{
    const posts = await getAllPosts()
    socket.emit('send-posts', posts)
    socket.on('add-post', async(post)=>{
        const p = await addPost(post)
        io.emit("update-feed", p);
    })
})



const PORT = process.env.PORT || 7000;
app.use(cors())
app.get('/api',(req,res)=>{
    res.send("Hey I am the server");
 }
)
server.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})

mongoose.connect('mongodb+srv://bhim511:HikeHike55$$@cluster0.fjso7bf.mongodb.net/the-linkedin-clone')
.then(console.log("DB Connected"))
.catch(e=>console.log(e))




