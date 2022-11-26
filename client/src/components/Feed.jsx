import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {io} from "socket.io-client"
import { useEffect } from 'react';

export default function Feed() {
    const [socket, setSocket] = useState()
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    // Setting up socket.io connection

    useEffect(()=>{
       const socketServer = io('http://localhost:5001')
       setSocket(socketServer);

       return ()=>{
        socketServer.disconnect();            // Clean up function runs as soon as the component unmounts
       }
    },[])

    useEffect(()=>{
        if(socket==null) return

        socket.once('send-posts',(p)=>{
            setPosts(p);
        })
    },[socket,posts])

    useEffect(()=>{
        if(socket==null) return;
        socket.on('update-feed',(post)=>{
            const newPosts = [...posts];
            newPosts.unshift(post)
            setPosts(newPosts)
        })

    },[socket, posts])




    const sendPost = (e)=>{
        if(socket==null) return;
        e.preventDefault();
        socket.emit('add-post', {
            name:"Bhimgouda Patil",
            description:"FullStackDeveloper",
            message:input
        })
        setInput('');
    }



  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title={"Photo"} color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title={"Photo"} color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title={"Photo"} color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title={"Photo"} color="#7FC15E" />
            </div>
        </div>

        {/* Posts */}
        {posts.map((post, index)=>{
            return <Post key={index} name={post.name} description={post.description} message={post.message}/>
        })}
    </div>
  )
}
