import React from 'react'
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Post({name,description,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>Sonny Sangha</h2>
                <p>Description</p>
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
}
