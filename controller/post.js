const Post = require("../model/post")

exports.addPost = async(post)=>{
    return await Post.create(post);
}

exports.getAllPosts = async()=>{
    return await Post.find({});
}