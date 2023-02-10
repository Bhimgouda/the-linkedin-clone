import React, {forwardRef} from 'react'
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name, timeStamp, description,message,profilePic}, ref)=>{
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar style={{"background": '#70b3ee'}} src={profilePic}>{name[0]}</Avatar>
            <div className="post__info">
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <p>{timeStamp?.slice(0,22)}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon = {ThumbUpAltOutlinedIcon} title="Like"  />
            <InputOption Icon = {ChatOutlinedIcon} title="Comment"  />
            <InputOption Icon = {ShareOutlinedIcon} title="Share"  />
            <InputOption Icon = {SendOutlinedIcon} title="Send"  />
        </div>
    </div>
  )
})

export default Post;
