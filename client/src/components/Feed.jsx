import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input type="text" />
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
        {posts.map(post=>{
            <Post name={post.name} description={post.description} message={post.message}/>
        })}
        <Post name="Sonny Sangha" description="This is a test" message="WOW this worked"/>
    </div>
  )
}
