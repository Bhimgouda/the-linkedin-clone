const {Schema, model} = require("mongoose");

const postSchema = new Schema({
    name:String,
    description: String,
    message: String,
    imageUrl: String,
})

const Post = model("Post", postSchema);

module.exports = Post;