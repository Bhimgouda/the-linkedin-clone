import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {io} from "socket.io-client";
import { useEffect } from 'react';
import FlipMove from "react-flip-move";

export default function Feed({user}) {
    const [socket, setSocket] = useState()
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    // Setting up socket.io connection

    useEffect(()=>{
       const socketServer = io('')
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
            name:user.name,
            description:user.email,
            message:input,
            profilePic: user.profilePic ||  "",
            timeStamp: new Date().toUTCString()
        })
        setInput('');
    }



  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input placeholder='Write a post (this is functional)' value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title={"Photo"} color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title={"video"} color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title={"Event"} color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title={"Schedule"} color="#7FC15E" />
            </div>
        </div>

        {/* Posts */}
        <FlipMove>
        {posts.map((post)=>{
            return <Post key={post._id} name={post.name} profilePic={post.profilePic} description={post.description} timeStamp={post.timeStamp} message={post.message}/>
        })}
        </FlipMove>
    </div>
  )
}
