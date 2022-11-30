const express = require("express");
const app = express();
const server = require("http").createServer(app)
const session = require("express-session");
const MongoStore = require("connect-mongo")
const mongoose = require("mongoose");
const cors = require("cors");
const { getAllPosts, addPost } = require("./controller/post");
const userRouter = require("./routes/user");
const path = require("path");
const io = require("socket.io")(server)

// ----------------------------- VARIABLES ---------------------------------//

const PORT = process.env.PORT || 7000;
const dbUrl = process.env.MONGODB_URI || 'mongodb+srv://bhim511:HikeHike55$$@cluster0.fjso7bf.mongodb.net/the-linkedin-clone'

// -------------------------- MIDDLEWARES -----------------------------------//

// req.body parsers
app.use(express.urlencoded({extended:true}))
app.use(express.json())



// -------------------------- REALTIME SOCKET.IO CONNECTION ---------------------------- //

io.on("connection", async(socket)=>{
    const posts = await getAllPosts()
    socket.emit('send-posts', posts)
    socket.on('add-post', async(post)=>{
        const p = await addPost(post)
        io.emit("update-feed", p);
    })
})






// --------------------------------- SESSION CONFIG -------------------------------- //
const secret = process.env.SECRET || "happysecret";

const store = new MongoStore({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60,
});

store.on("error", (e) => {
    console.log("Session Store Error", e);
});

// Session configuration
const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionConfig))

// ----------------------------------------- User Routes ---------------------------------//

app.use('/api', userRouter)

app.use(express.static("client/build"));
app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

// -------------------------------------- Error handling middleware ----------------------//

app.use((err,req,res,next)=>{
    console.log(err.stack);
    const {message="Something went wrong", status=500} = err;
    res.status(status).send(message);
})

server.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`)
})

mongoose.connect(dbUrl)
.then(console.log("DB Connected"))
.catch(e=>console.log(e))




